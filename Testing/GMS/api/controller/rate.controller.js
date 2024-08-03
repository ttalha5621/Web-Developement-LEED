const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const Model = require('../constants/response.constants');

const { models } = require('../sequelize');
const { logger } = require('../../services/logger');
const client = require('../redis');
const redisKeys = require('../constants/redisKeys');
const errorKeys = require('../constants/errorKeys.constant');

exports.getRates = async (req, res, next) => {
    const response = new Model();
    try {
        client.get(redisKeys.GET_ALL_RATES, async (err, rate) => {
            if (rate) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(rate));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const rateGet = await models.GMS_Rate.findAll();
            logger.info('All records fetched from db');
            response.setStatus(ReasonPhrases.OK);
            response.setData(rateGet);
            client.set(redisKeys.GET_ALL_RATES, JSON.stringify(response.getData()), 'EX', (15 * 60));
            return res.status(StatusCodes.OK).send(response);
        });
    } catch (err) {
        logger.error(`Error! ${err}`);
        if (err.ValidationError || err.SyntaxError || err.ForeignKeyConstraintError) {
            req.body = {
                error_key: errorKeys.BAD_REQUEST,
            };
            return next();
        }
        req.body = {
            error_key: errorKeys.INTERNAL_SERVER_ERROR,
        };
        return next();
    }
    return null;
};

exports.getRateById = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_RATE_ID}:${req.params.id}`;
        const response = new Model();
        client.get(redisKey, async (err, customer) => {
            if (customer) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(customer));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const rateById = await models.GMS_Rate.findByPk(req.params.id);
            if (rateById != null) {
                logger.info(`Rate record fetched for id:${req.params.id}`);
                response.setStatus(ReasonPhrases.OK);
                response.setData(rateById);
                client.set(redisKey, JSON.stringify(response.getData()), 'EX', (15 * 60));
                return res.status(StatusCodes.OK).send(response);
            }
            logger.error(`Rate not found in Users for id: ${req.params.id}`);
            response.setStatus(ReasonPhrases.NOT_FOUND);
            response.setData('Record not found');
            res.status(StatusCodes.NOT_FOUND).send(response);
            return null;
        });
    } catch (err) {
        logger.error(`Error! ${err}`);
        if (err.ValidationError || err.SyntaxError || err.ForeignKeyConstraintError) {
            req.body = {
                error_key: errorKeys.BAD_REQUEST,
            };
            return next();
        }
        req.body = {
            error_key: errorKeys.INTERNAL_SERVER_ERROR,
        };
        return next();
    }
    return null;
};

exports.addRate = async (req, res, next) => {
    try {
        const response = new Model();
        const {
            quantity,
            unit,
            price,
            date,
        } = req.body;

        const rateAdd = await models.GMS_Rate.create({
            quantity,
            unit,
            price,
            date,
        });
        logger.info('New Rate added');
        response.setStatus(ReasonPhrases.OK);
        response.setData(rateAdd);
        res.status(StatusCodes.OK).send(response);
    } catch (err) {
        logger.error(`Error! ${err}`);
        if (err.ValidationError || err.SyntaxError || err.ForeignKeyConstraintError) {
            req.body = {
                error_key: errorKeys.BAD_REQUEST,
            };
            return next();
        }
        req.body = {
            error_key: errorKeys.INTERNAL_SERVER_ERROR,
        };
        return next();
    }
    return null;
};

exports.updateRate = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_RATE_ID}:${req.params.id}`;
        const response = new Model();
        const {
            quantity,
            unit,
            price,
            date,
        } = req.body;

        const rateUpdate = await models.GMS_Rate.findByPk(req.params.id);
        rateUpdate.update({
            quantity,
            unit,
            price,
            date,
        });
        logger.info(`Rate record updated for id:${req.params.id}`);
        response.setStatus(ReasonPhrases.OK);
        response.setData(rateUpdate);
        client.set(redisKey, JSON.stringify(response.getData()), 'EX', (15 * 60));
        return res.status(StatusCodes.OK).send(response);
    } catch (err) {
        logger.error(`Error! ${err}`);
        if (err.ValidationError || err.SyntaxError || err.ForeignKeyConstraintError) {
            req.body = {
                error_key: errorKeys.BAD_REQUEST,
            };
            return next();
        }
        req.body = {
            error_key: errorKeys.INTERNAL_SERVER_ERROR,
        };
        return next();
    }
};

exports.deleteRate = async (req, res, next) => {
    try {
        const response = new Model();
        const redisKey = `${redisKeys.GET_RATE_ID}:${req.params.id}`;
        const rateDelete = await models.GMS_Rate.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (rateDelete === 1) {
            logger.info(`Rate record deleted for id:${req.params.id}`);
            response.setStatus(ReasonPhrases.OK);
            client.del(redisKey);
            response.setData('Successfully deleted');
        } else {
            logger.error(`Record not found in Rate with id as: ${req.params.id}`);
            response.setStatus(ReasonPhrases.NOT_FOUND);
            response.setData('Record not found');
        }
        res.send(response);
    } catch (err) {
        logger.error(`Error! ${err}`);
        if (err.ValidationError || err.SyntaxError || err.ForeignKeyConstraintError) {
            req.body = {
                error_key: errorKeys.BAD_REQUEST,
            };
            return next();
        }
        req.body = {
            error_key: errorKeys.INTERNAL_SERVER_ERROR,
        };
        return next();
    }
    return null;
};
