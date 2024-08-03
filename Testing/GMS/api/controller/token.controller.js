const jwt = require('jsonwebtoken');
const { ReasonPhrases } = require('http-status-codes');
const { StatusCodes } = require('http-status-codes');
const config = require('../../config');
const Model = require('../constants/response.constants');
const { logger } = require('../../services/logger');
const errorKeys = require('../constants/errorKeys.constant');

exports.jwtToken = (req, res, next) => {
    const response = new Model();
    const {
        id,
        email,
        // eslint-disable-next-line camelcase
        user_type,
    } = req.body;
    const payload = { id, email, user_type };
    console.log('Payload: ', payload);
    jwt.sign(
        payload,
        config.authSecret,
        { expiresIn: `${config.tokenExpiresIn}` },
        (err, token) => {
            try {
                logger.info(`Token is: ${token}`);
                response.setStatus(ReasonPhrases.OK);
                response.setData(token);
                return res.status(StatusCodes.OK).send(response);
            } catch (err1) {
                logger.error(`Error! ${err1}`);
                if (err1.ValidationError || err1.SyntaxError || err1.ForeignKeyConstraintError) {
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
        },
    );
};
