const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const Model = require('../constants/response.constants');

const { models } = require('../sequelize');
const { logger } = require('../../services/logger');
const client = require('../redis');
const redisKeys = require('../constants/redisKeys');
const errorKeys = require('../constants/errorKeys.constant');

exports.getTags = async (req, res, next) => {
    const response = new Model();
    try {
        client.get(redisKeys.GET_ALL_TAGS, async (err, tag) => {
            if (tag) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(tag));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const tags = await models.GMS_Tags.findAll();
            logger.info('All records fetched from db');
            response.setStatus(ReasonPhrases.OK);
            response.setData(tags);
            client.set(redisKeys.GET_ALL_TAGS, JSON.stringify(response.getData()), 'EX', (15 * 60));
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

exports.getTagById = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_TAG_ID}:${req.params.id}`;
        const response = new Model();
        client.get(redisKey, async (err, tag) => {
            if (tag) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(tag));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const tagById = await models.GMS_Tags.findByPk(req.params.id);
            if (tagById != null) {
                logger.info(`Tag's record fetched for id:${req.params.id}`);
                response.setStatus(ReasonPhrases.OK);
                response.setData(tagById);
                client.set(redisKey, JSON.stringify(response.getData()), 'EX', (15 * 60));
                return res.status(StatusCodes.OK).send(response);
            }
            logger.error(`Record not found in Tag for id: ${req.params.id}`);
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

exports.newTag = async (req, res, next) => {
    try {
        const response = new Model();

        const {
            QrCode,
        } = req.body;
        const tagAdd = await models.GMS_Tags.create({
            QrCode,
        });
        logger.info('New Tag added  ');
        response.setStatus(ReasonPhrases.OK);
        const displayData = {
            QrCode: tagAdd.QrCode,
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

exports.updateTag = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_TAG_ID}:${req.params.id}`;
        const response = new Model();

        const {
            QrCode,
        } = req.body;

        const tagUpdate = await models.GMS_Tags.findByPk(req.params.id);
        tagUpdate.update({
            QrCode,
        });
        logger.info(`Tag record updated for id:${req.params.id}`);
        response.setStatus(ReasonPhrases.OK);
        response.setData(tagUpdate);
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

exports.deleteTag = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_TAG_ID}:${req.params.id}`;
        const response = new Model();
        const tagDelete = await models.GMS_Tags.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (tagDelete === 1) {
            logger.info(`Tag record deleted for id:${req.params.id}`);
            response.setStatus(ReasonPhrases.OK);
            client.del(redisKey);
            response.setData('Successfully deleted');
        } else {
            logger.error(`Record not found in Tag with id as: ${req.params.id}`);
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
