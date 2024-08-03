const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const Model = require('../constants/response.constants');
const { models } = require('../sequelize');
const { logger } = require('../../services/logger');
const client = require('../redis');
const redisKeys = require('../constants/redisKeys');
const errorKeys = require('../constants/errorKeys.constant');

exports.getCustomers = async (req, res, next) => {
    const response = new Model();
    try {
        client.get(redisKeys.GET_ALL_CUSTOMERS, async (err, customer) => {
            if (customer) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(customer));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const customers = await models.GMS_Customer.findAll();
            logger.info('All records fetched from db');
            response.setStatus(ReasonPhrases.OK);
            response.setData(customers);
            client.set(redisKeys.GET_ALL_CUSTOMERS, JSON.stringify(response.getData()), 'EX', (15 * 60));
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

exports.getCustomerById = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_CUSTOMER_ID}:${req.params.id}`;
        const response = new Model();
        client.get(redisKey, async (err, customer) => {
            if (customer) {
                const responseR = new Model('redis');
                responseR.setStatus(ReasonPhrases.OK);
                responseR.setData(JSON.parse(customer));
                return res.status(StatusCodes.OK).send(responseR);
            }
            const customerr = await models.GMS_Customer.findByPk(req.params.id);
            if (customer != null) {
                logger.info(`Users record fetched for id:${req.params.id}`);
                response.setStatus(ReasonPhrases.OK);
                response.setData(customerr);
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

exports.addCustomer = async (req, res, next) => {
    try {
        const response = new Model();
        const {
            // eslint-disable-next-line camelcase
            user_id,
            // eslint-disable-next-line camelcase
            bank_account_no,
        } = req.body;

        // eslint-disable-next-line camelcase
        const add_customer = await models.GMS_Customer.create({
            user_id,
            bank_account_no,
        });
        logger.info('New customer added');
        response.setStatus(ReasonPhrases.OK);
        response.setData(add_customer);
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

exports.updateCustomer = async (req, res, next) => {
    try {
        const redisKey = `${redisKeys.GET_CUSTOMER_ID}:${req.params.id}`;
        const response = new Model();
        const {
            // eslint-disable-next-line camelcase
            user_id,
            // eslint-disable-next-line camelcase
            bank_account_no,
        } = req.body;

        // eslint-disable-next-line camelcase
        const update_customer = await models.GMS_Customer.findByPk(req.params.id);
        update_customer.update({
            user_id,
            bank_account_no,
        });
        logger.info(`Customer record updated for id:${req.params.id}`);
        response.setStatus(ReasonPhrases.OK);
        response.setData(update_customer);
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

exports.deleteCustomer = async (req, res, next) => {
    try {
        const response = new Model();
        const redisKey = `${redisKeys.GET_CUSTOMER_ID}:${req.params.id}`;
        // eslint-disable-next-line camelcase
        const delete_customer = await models.GMS_Customer.destroy({
            where: {
                id: req.params.id,
            },
        });
        // eslint-disable-next-line camelcase
        if (delete_customer === 1) {
            logger.info(`Customers record deleted for id:${req.params.id}`);
            response.setStatus(ReasonPhrases.OK);
            client.del(redisKey);
            response.setData('Successfully deleted');
        } else {
            logger.error(`Record not found in customers with id as: ${req.params.id}`);
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
