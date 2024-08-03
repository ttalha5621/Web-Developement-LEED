const { ReasonPhrases } = require('http-status-codes');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcrypt');
const { default: Axios } = require('axios');
const config = require('../../config');
const Model = require('../constants/response.constants');
const { models } = require('../sequelize');
const { logger } = require('../../services/logger');
const errorKeys = require('../constants/errorKeys.constant');

exports.signIn = async (req, res, next) => {
    const response = new Model();
    try {
        const { email, password } = req.body;
        logger.info('Email', req.body.email);
        // See if user Exists
        const user = await models.GMS_User.findOne({ where: { email } });
        if (!user) {
            logger.error('Invalid credentials');
            response.setStatus(ReasonPhrases.NOT_FOUND);
            response.setData('Invalid Credentials');
            return res.status(StatusCodes.NOT_FOUND).send(response);
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            logger.error('Invalid credentials');
            response.setStatus(ReasonPhrases.INTERNAL_SERVER_ERROR);
            response.setData('Invalid Credentials');
            return res.status(StatusCodes.NOT_FOUND).send(response);
        }
        console.log('User Data Values: ', user.dataValues.first_name);
        const token = {
            id: user.dataValues.id,
            first_name: user.dataValues.first_name,
            last_name: user.dataValues.last_name,
            email: user.dataValues.email,
            contact_no: user.dataValues.contact_no,
            user_type: user.dataValues.user_type,
        };
        const userSignIn = await Axios.post(`${config.origin}/token`, token);
        const dataUser = {
            id: user.dataValues.id,
            first_name: user.dataValues.first_name,
            last_name: user.dataValues.last_name,
            email: user.dataValues.email,
            contact_no: user.dataValues.contact_no,
            user_type: user.dataValues.user_type,
            token: userSignIn.data.data,
        };
        response.setStatus(ReasonPhrases.OK);
        response.setData(dataUser);
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
