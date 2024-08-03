const bcrypt = require('bcrypt');
const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const Model = require('../constants/response.constants');
const { models } = require('../sequelize');
const { logger } = require('../../services/logger');
const client = require('../redis');
const redisKeys = require('../constants/redisKeys');
const errorKeys = require('../constants/errorKeys.constant');

exports.getUsers = async (req, res, next) => {
    try {
        // client.get(redisKeys.GET_ALL_USERS, async (err, user) => {
        //     if (user) {
        //         const responseR = new Model('redis');
        //         responseR.setStatus(ReasonPhrases.OK);
        //         responseR.setData(JSON.parse(user));
        //         return res.status(StatusCodes.OK).send(responseR);
        //     }
        const response = new Model();
        const userGet = await models.GMS_User.findAll({
            attributes: {
                exclude: ['password'], // Removing password from User response data
            },
        });
        logger.info('All records fetched from db');
        response.setStatus(ReasonPhrases.OK);
        response.setData(userGet);
        client.set(redisKeys.GET_ALL_USERS, JSON.stringify(response.getData()), 'EX', (15 * 60));
        return res.status(StatusCodes.OK).send(response);
        // });
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
    // return null;
};

exports.getUserById = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_USER_ID}:${req.params.id}`;
        const response = new Model();
        client.get(redisKey, async (err, user) => {
            if (user) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(user));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const userById = await models.GMS_User.findByPk(req.params.id, {
                attributes: {
                    exclude: ['password'], // Removing password from User response data
                },
            });
            if (userById != null) {
                logger.info(`User's record fetched for id:${req.params.id}`);
                response.setStatus(ReasonPhrases.OK);
                response.setData(userById);
                client.set(redisKey, JSON.stringify(response.getData()), 'EX', (15 * 60));
                return res.status(StatusCodes.OK).send(response);
            }
            logger.error(`Record not found in User for id: ${req.params.id}`);
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

exports.newUser = async (req, res, next) => {
    try {
        const response = new Model();

        const {
            // eslint-disable-next-line camelcase
            first_name,
            // eslint-disable-next-line camelcase
            last_name,
            email,
            // eslint-disable-next-line camelcase
            contact_no,
            // eslint-disable-next-line camelcase
            user_type,
            password,
        } = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const userAdd = await models.GMS_User.create({
            first_name,
            last_name,
            email,
            contact_no,
            user_type,
            password: hashPassword,
        });

        logger.info('New user added  ');
        response.setStatus(ReasonPhrases.OK);
        const dataShow = {
            first_name: userAdd.first_name,
            last_name: userAdd.last_name,
            email: userAdd.email,
            contact_no: userAdd.contact_no,
            user_type: userAdd.user_type,
        };
        response.setData(dataShow);
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

exports.updateUser = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_USER_ID}:${req.params.id}`;
        const response = new Model();

        const {
            // eslint-disable-next-line camelcase
            first_name,
            // eslint-disable-next-line camelcase
            last_name,
            email,
            // eslint-disable-next-line camelcase
            contact_no,
            // eslint-disable-next-line camelcase
            user_type,
        } = req.body;

        const userUpdate = await models.GMS_User.findByPk(req.params.id);
        userUpdate.update({
            first_name,
            last_name,
            email,
            contact_no,
            user_type,
        });
        logger.info(`User's record updated for id:${req.params.id}`);
        response.setStatus(ReasonPhrases.OK);
        response.setData(userUpdate);
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

exports.deleteUser = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_USER_ID}:${req.params.id}`;
        const response = new Model();
        const userDelete = await models.GMS_User.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (userDelete === 1) {
            logger.info(`Users record deleted for id:${req.params.id}`);
            response.setStatus(ReasonPhrases.OK);
            client.del(redisKey);
            response.setData('Successfully deleted');
        } else {
            logger.error(`Record not found in user with id as: ${req.params.id}`);
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
