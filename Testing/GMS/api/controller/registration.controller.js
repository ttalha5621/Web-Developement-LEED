const { default: Axios } = require('axios');
const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const config = require('../../config');
const Model = require('../constants/response.constants');
const { logger } = require('../../services/logger');
const errorKeys = require('../constants/errorKeys.constant');

exports.registration = async (req, res, next) => {
    try {
        console.log('Registration: ', req.body);
        const response = new Model();
        const user = await Axios.post(`${config.origin}/users`, req.body);
        const userData = user.data.data;
        response.setStatus(ReasonPhrases.OK);
        response.setData(userData);
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
