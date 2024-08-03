const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const Model = require('../constants/response.constants');

const { models } = require('../sequelize');
const { logger } = require('../../services/logger');
const client = require('../redis');
const redisKeys = require('../constants/redisKeys');
const errorKeys = require('../constants/errorKeys.constant');

exports.getStones = async (req, res, next) => {
    const response = new Model();
    try {
        client.get(redisKeys.GET_ALL_STONES, async (err, stone) => {
            if (stone) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(stone));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const stones = await models.GMS_Stone.findAll();
            logger.info('All records fetched from db');
            response.setStatus(ReasonPhrases.OK);
            response.setData(stones);
            client.set(redisKeys.GET_ALL_STONES, JSON.stringify(response.getData()), 'EX', (15 * 60));
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

exports.getStoneById = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_STONE_ID}:${req.params.id}`;
        const response = new Model();
        client.get(redisKey, async (err, stone) => {
            if (stone) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(stone));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const stoneById = await models.GMS_Stone.findByPk(req.params.id);
            if (stoneById != null) {
                logger.info(`Stone's record fetched for id:${req.params.id}`);
                response.setStatus(ReasonPhrases.OK);
                response.setData(stoneById);
                client.set(redisKey, JSON.stringify(response.getData()), 'EX', (15 * 60));
                return res.status(StatusCodes.OK).send(response);
            }
            logger.error(`Record not found in Stone for id: ${req.params.id}`);
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

exports.newStone = async (req, res, next) => {
    try {
        const response = new Model();

        const {
            name,
            weight,
            unit,
        } = req.body;
        console.log('request body', req.body);
        const stoneAdd = await models.GMS_Stone.create({
            name,
            weight,
            unit,
        });
        logger.info('New Stone added  ');
        response.setStatus(ReasonPhrases.OK);
        const displayData = {
            name: stoneAdd.name,
            weight: stoneAdd.weight,
            unit: stoneAdd.unit,
        };
        response.setData(displayData);
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

exports.updateStone = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_STONE_ID}:${req.params.id}`;
        const response = new Model();

        const {
            name,
            weight,
            unit,
        } = req.body;

        const stoneUpdate = await models.GMS_Stone.findByPk(req.params.id);
        stoneUpdate.update({
            name,
            weight,
            unit,
        });
        logger.info(`Stone record updated for id:${req.params.id}`);
        response.setStatus(ReasonPhrases.OK);
        response.setData(stoneUpdate);
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

exports.deleteStone = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_STONE_ID}:${req.params.id}`;
        const response = new Model();
        const stoneDelete = await models.GMS_Stone.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (stoneDelete === 1) {
            logger.info(`Stone record deleted for id:${req.params.id}`);
            response.setStatus(ReasonPhrases.OK);
            client.del(redisKey);
            response.setData('Successfully deleted');
        } else {
            logger.error(`Record not found in stone with id as: ${req.params.id}`);
            response.setStatus(ReasonPhrases.NOT_FOUND);
            response.setData('Record not found');
        }
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
