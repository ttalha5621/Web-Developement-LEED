const jwt = require('jsonwebtoken');
const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const config = require('../../config');
const Model = require('../constants/response.constants');

module.exports = (req, res, next) => {
    const response = new Model();
    // Get token from header
    const authorization = req.header('Authorization');
    const fields = authorization.split(' ');
    const token = fields[1];

    // console.log("token ", token)
    // Check if not Json web token
    if (!token) {
        console.log('token not verified ');
        response.setStatus(ReasonPhrases.UNAUTHORIZED);
        response.setData('No token, authorization denied');
        return res.status(StatusCodes.UNAUTHORIZED).send(response);
    }
    // Verify Json web token
    try {
        const decoded = jwt.verify(
            token,
            config.authSecret,
        );
        console.log('decoded user ', decoded);
        req.user = decoded;
        console.log('Request.User : ', req.user);
        return next();
    } catch (e) {
        console.log(e);
        if (e.name === 'TokenExpiredError') {
            response.setStatus(ReasonPhrases.UNAUTHORIZED);
            response.setData('Token expired, authorization denied');
            return res.status(StatusCodes.UNAUTHORIZED).send(response);
        }
        if (e.name === 'JsonWebTokenError') {
            response.setStatus(ReasonPhrases.UNAUTHORIZED);
            response.setData('Token not valid, authorization denied');
            return res.status(StatusCodes.UNAUTHORIZED).send(response);
        }
        response.setStatus(ReasonPhrases.INTERNAL_SERVER_ERROR);
        response.setData('Internal Error!');

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(response);
    }
};
