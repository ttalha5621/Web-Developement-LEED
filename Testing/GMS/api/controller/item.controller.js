const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const Model = require('../constants/response.constants');
const { models } = require('../sequelize');
const { logger } = require('../../services/logger');
const client = require('../redis');
const redisKeys = require('../constants/redisKeys');
const errorKeys = require('../constants/errorKeys.constant');

exports.getItems = async (req, res, next) => {
    const response = new Model();
    try {
        client.get(redisKeys.GET_ALL_ITEMS, async (err, item) => {
            if (item) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(item));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const items = await models.GMS_Item.findAll();
            logger.info('All records fetched from db');
            response.setStatus(ReasonPhrases.OK);
            response.setData(items);
            client.set(redisKeys.GET_ALL_ITEMS, JSON.stringify(response.getData()), 'EX', (15 * 60));
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

exports.getItemById = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_ITEM_ID}:${req.params.id}`;
        const response = new Model();
        client.get(redisKey, async (err, item) => {
            if (item) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(item));
                return res.status(StatusCodes.OK).send(responseR);
            }

            const items = await models.GMS_Item.findByPk(req.params.id);
            if (items != null) {
                logger.info(`Items record fetched for id:${req.params.id}`);
                response.setStatus(ReasonPhrases.OK);
                response.setData(items);
                client.set(redisKey, JSON.stringify(response.getData()), 'EX', (15 * 60));
                return res.status(StatusCodes.OK).send(response);
            }
            logger.error(`Record not found in item for id: ${req.params.id}`);
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

exports.newItem = async (req, res, next) => {
    try {
        const response = new Model();
        const {
            name,
            qualityId,
            stoneid,
            laborcost,
            polishpercent,
            manufacturingCost,
            tagId,
            weight,
        } = req.body;
        console.log(' request body ', req.body);
        // eslint-disable-next-line camelcase
        const add_item = await models.GMS_Item.create({
            name,
            qualityId,
            stoneid,
            laborcost,
            polishpercent,
            manufacturingCost,
            tagId,
            weight,
        });

        logger.info('New Item added ');
        response.setStatus(ReasonPhrases.OK);
        // eslint-disable-next-line camelcase
        const show_data = {
            name: add_item.name,
            laborcost: add_item.laborcost,
            polishpercent: add_item.polishpercent,
            manufacturingCost: add_item.manufacturingCost,
            weight: add_item.weight,
        };
        response.setData(show_data);
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

exports.updateItem = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_ITEM_ID}:${req.params.id}`;
        const response = new Model();
        const {
            name,
            qualityId,
            stoneid,
            laborcost,
            polishpercent,
            manufacturingCost,
            tagId,
            weight,
        } = req.body;

        // eslint-disable-next-line camelcase
        const update_item = await models.GMS_Item.findByPk(req.params.id);
        update_item.update({
            name,
            qualityId,
            stoneid,
            laborcost,
            polishpercent,
            manufacturingCost,
            tagId,
            weight,
        });
        logger.info(`Item record updated for id:${req.params.id}`);
        response.setStatus(ReasonPhrases.OK);
        response.setData(update_item);
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

exports.deleteItem = async (req, res, next) => {
    try {
        const response = new Model();
        const redisKey = `${redisKeys.GET_ITEM_ID}:${req.params.id}`;
        // eslint-disable-next-line camelcase
        const delete_item = await models.GMS_Item.destroy({
            where: {
                id: req.params.id,
            },
        });
        // eslint-disable-next-line camelcase
        if (delete_item === 1) {
            logger.info(`Item record deleted for id:${req.params.id}`);
            response.setStatus(ReasonPhrases.OK);
            client.del(redisKey);
            response.setData('Successfully deleted');
        } else {
            logger.error(`Record not found in Items with id as: ${req.params.id}`);
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
