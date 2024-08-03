const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const Model = require('../constants/response.constants');

const { models } = require('../sequelize');
const { logger } = require('../../services/logger');
const client = require('../redis');
const redisKeys = require('../constants/redisKeys');
const errorKeys = require('../constants/errorKeys.constant');

exports.getQuality = async (req, res, next) => {
    const response = new Model();
    try {
        client.get(redisKeys.GET_ALL_QUALITY, async (err, quality) => {
            if (quality) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(quality));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const qualityGet = await models.GMS_Quality.findAll();
            logger.info('All records fetched from db');
            response.setStatus(ReasonPhrases.OK);
            response.setData(qualityGet);
            client.set(redisKeys.GET_ALL_QUALITY, qualityGet, 'EX', (15 * 60));
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

exports.getQualityById = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_QUALITY_ID}:${req.params.id}`;
        const response = new Model();
        client.get(redisKey, async (err, quality) => {
            if (quality) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(quality));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const getById = await models.GMS_Quality.findByPk(req.params.id);

            if (getById != null) {
                logger.info(`Users record fetched for id:${req.params.id}`);
                response.setStatus(ReasonPhrases.OK);
                response.setData(getById);
                client.set(redisKey, JSON.stringify(response.getData()), 'EX', (15 * 60));
                return res.status(StatusCodes.OK).send(response);
            }
            logger.error(`Record not found in Users for id: ${req.params.id}`);
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

exports.addQuality = async (req, res, next) => {
    const response = new Model();
    try {
        const {
            name,
        } = req.body;

        const qualityAdd = await models.GMS_Quality.create({
            name,
        });
        logger.info('New quality added ');
        response.setStatus(ReasonPhrases.OK);
        response.setData(qualityAdd);
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

exports.updateQuality = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_QUALITY_ID}:${req.params.id}`;
        const response = new Model();
        const {
            name,
        } = req.body;
        const qualityUpdate = await models.GMS_Quality.findByPk(req.params.id);

        qualityUpdate.update({
            name,
        });
        logger.info(`Quality record updated for id:${req.params.id}`);
        response.setStatus(ReasonPhrases.OK);
        response.setData(qualityUpdate);
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

exports.deleteQuality = async (req, res, next) => {
    try {
        const response = new Model();
        const redisKey = `${redisKeys.GET_QUALITY_ID}:${req.params.id}`;
        const qualityDelete = await models.GMS_Quality.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (qualityDelete === 1) {
            logger.info(`Quality record deleted for id:${req.params.id}`);
            response.setStatus(ReasonPhrases.OK);
            client.del(redisKey);
            response.setData('Successfully deleted');
        } else {
            logger.error(`Record not found in quality with id as: ${req.params.id}`);
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
