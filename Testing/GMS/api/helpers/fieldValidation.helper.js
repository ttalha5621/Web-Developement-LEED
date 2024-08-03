/* eslint-disable indent */
const { check, validationResult } = require('express-validator');

const { StatusCodes } = require('http-status-codes');
const { ReasonPhrases } = require('http-status-codes');
const Model = require('../constants/response.constants');
const config = require('../../config');

exports.fieldVerification = (req, res, next) => {
    const response = new Model();
    let errors;

    if (config.environment === 'production') {
        const myValidationResult = validationResult.withDefaults({
            formatter: (error) => ({
                message: error.msg,
                location: error.location,
            }),
        });
        errors = myValidationResult(req);
    } else if (config.environment === 'development') {
        errors = validationResult(req);
    }

    if (!errors.isEmpty()) {
        console.log(!errors.isEmpty());

        if (config.environment === 'production') {
            response.setData({ errors: errors.array() });
        } else if (config.environment === 'development') {
            response.setData(errors);
        }
        response.setStatus(ReasonPhrases.PARTIAL_CONTENT);
        return res.status(StatusCodes.PARTIAL_CONTENT).send(response);
    }
    return next();
};

exports.validate = (method) => {
    switch (method) {
        case 'signIn': {
            return [
                check('email')
                    .not().isEmpty()
                    .withMessage('Email is required')
                    .isEmail()
                    .withMessage('Invalid input for email type, expected someone@somemail.com'),

                check('password')
                    .not().isEmpty()
                    .withMessage('Password is required')
                    .isString()
                    .exists()
                    .withMessage('Invalid input for string type'),
            ];
        }

        case 'addQuality': {
            return [
                check('name')
                    .not()
                    .isEmpty()
                    .withMessage('Name is required')
                    .isString()
                    .exists()
                    .withMessage('Invalid input for string type'),
            ];
        }

        case 'addCustomer':
            {
                return [
                    check('user_id')
                        .optional({ nullable: true, checkFalsy: true })
                        .isUUID()
                        .withMessage('UUID format is required'),

                    check('bank_account_no')
                        .not().isEmpty()
                        .withMessage('Last Name is required')
                        .isString()
                        .exists()
                        .withMessage('Invalid input for string type'),
                ];
            }

        case 'newUser':
            {
                return [
                    check('first_name')
                        .not().isEmpty()
                        .withMessage('First Name is required')
                        .isString()
                        .exists()
                        .withMessage('Invalid input for string type'),

                    check('last_name')
                        .not().isEmpty()
                        .withMessage('Last Name is required')
                        .isString()
                        .exists()
                        .withMessage('Invalid input for string type'),

                    check('email')
                        .not().isEmpty()
                        .withMessage('Email is required')
                        .isEmail()
                        .withMessage('Invalid input for email type, expected someone@somemail.com'),

                    check('contact_no')
                        .not().isEmpty()
                        .withMessage('Contact Number is required')
                        .isNumeric()
                        .withMessage('Invalid input for integer type'),

                    check('user_type')
                        .not().isEmpty()
                        .withMessage('AccountType is required')
                        .isInt()
                        .withMessage('Invalid value for integer type'),

                    check('password')
                        .not().isEmpty()
                        .withMessage('Password is required')
                        .isString()
                        .exists()
                        .withMessage('Invalid input for string type'),

                ];
            }

        case 'updateUser': {
            return [
                check('first_name')
                    .not().isEmpty()
                    .withMessage('First Name is required')
                    .isString()
                    .exists()
                    .withMessage('Invalid input for string type'),

                check('last_name')
                    .not().isEmpty()
                    .withMessage('Last Name is required')
                    .isString()
                    .exists()
                    .withMessage('Invalid input for string type'),

                check('email')
                    .not().isEmpty()
                    .withMessage('Email is required')
                    .isEmail()
                    .withMessage('Invalid input for email type, expected someone@somemail.com'),

                check('contact_no')
                    .not().isEmpty()
                    .withMessage('Contact Number is required')
                    .isNumeric()
                    .withMessage('Invalid input for integer type'),

                check('user_type')
                    .not().isEmpty()
                    .withMessage('AccountType is required')
                    .isInt()
                    .withMessage('Invalid value for integer type'),

            ];
        }

        case 'addRate': {
            return [
                check('quantity')
                    .not().isEmpty()
                    .withMessage('Quantity is required')
                    .isInt()
                    .exists()
                    .withMessage('Invalid input for Integer type'),

                check('unit')
                    .not().isEmpty()
                    .withMessage('Unit is required')
                    .isString()
                    .exists()
                    .withMessage('Invalid input for string type'),

                check('price')
                    .not().isEmpty()
                    .withMessage('Price is required')
                    .isNumeric()
                    .withMessage('Invalid input for integer type'),

                check('date')
                    .not().isEmpty()
                    .withMessage('Date is required')
                    .isDate()
                    .withMessage('Invalid value for Date type'),

            ];
        }

        case 'newItem': {
            return [
                check('name')
                    .not().isEmpty()
                    .withMessage('name is Required')
                    .isString()
                    .exists()
                    .withMessage('Invalid input for String type'),

                check('laborcost')
                    .not().isEmpty()
                    .withMessage('laborcost is required')
                    .isFloat()
                    .exists()
                    .withMessage('Invalid input for Float type'),

                check('manufacturingCost')
                    .not().isEmpty()
                    .withMessage('manufacturingCost is required')
                    .isFloat()
                    .exists()
                    .withMessage('Invalid input for Float type'),

                check('polishpercent')
                    .not().isEmpty()
                    .withMessage('polishpercent is required')
                    .isFloat()
                    .exists()
                    .withMessage('Invalid input for Float type'),

                check('weight')
                    .not().isEmpty()
                    .withMessage('weight is required')
                    .isFloat()
                    .exists()
                    .withMessage('Invalid input for Float type'),
            ];
        }

        case 'updateItem': {
            return [
                check('name')
                    .not().isEmpty()
                    .withMessage('name is Required')
                    .isString()
                    .exists()
                    .withMessage('Invalid input for String type'),

                check('laborcost')
                    .not().isEmpty()
                    .withMessage('laborcost is required')
                    .isFloat()
                    .exists()
                    .withMessage('Invalid input for Float type'),

                check('manufacturingCost')
                    .not().isEmpty()
                    .withMessage('nanufacturingCost is required')
                    .isFloat()
                    .exists()
                    .withMessage('Invalid input for Float type'),

                check('polishpercent')
                    .not().isEmpty()
                    .withMessage('Polishpercent is required')
                    .isFloat()
                    .exists()
                    .withMessage('Invalid input for Float type'),

                check('weight')
                    .not().isEmpty()
                    .withMessage('weight is required')
                    .isFloat()
                    .exists()
                    .withMessage('Invalid input for Float type'),
            ];
        }

        case 'newTag': {
            return [
                check('QrCode')
                    .not().isEmpty()
                    .withMessage('qrCode is required')
                    .isString()
                    .exists()
                    .withMessage('Invalid Input for String Type'),
            ];
        }

        case 'updateTag': {
            return [
                check('QrCode')
                    .not().isEmpty()
                    .withMessage('qrCode is required')
                    .isString()
                    .exists()
                    .withMessage('Invalid Input for String Type'),
            ];
        }

        case 'newStone': {
            return [
                check('name')
                    .not().isEmpty()
                    .withMessage('name is required')
                    .isString()
                    .exists()
                    .withMessage('Invalid input for String type'),

                check('weight')
                    .not().isEmpty()
                    .withMessage('Weight is required')
                    .isInt()
                    .exists()
                    .withMessage('Invalid input fot Integer Type'),

                check('unit')
                    .not().isEmpty()
                    .withMessage('Unit is Required')
                    .isString()
                    .exists()
                    .withMessage('Invalid Input for String Type'),
            ];
        }

        case 'updateStone': {
            return [
                check('name')
                    .not().isEmpty()
                    .withMessage('name is required')
                    .isString()
                    .exists()
                    .withMessage('Invalid input for String type'),

                check('weight')
                    .not().isEmpty()
                    .withMessage('Weight is required')
                    .isInt()
                    .exists()
                    .withMessage('Invalid input fot Integer Type'),

                check('unit')
                    .not().isEmpty()
                    .withMessage('Unit is Required')
                    .isString()
                    .exists()
                    .withMessage('Invalid Input for String Type'),
            ];
        }
        default:

            break;
    }
    return null;
};
