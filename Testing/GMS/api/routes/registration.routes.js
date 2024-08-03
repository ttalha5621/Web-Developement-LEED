const express = require('express');

const router = express.Router();
const controller = require('../controller/registration.controller');
const fieldValidation = require('../helpers/fieldValidation.helper');
const errors = require('../middleware/errors');

/**
* @swagger
* /registration:
*  post:
*      tags:
*          - Registration
*      name: Registration
*      produces:
*          - application/json
*      consumes:
*          - application/json
*      summary: This should Register new user.
*      requestBody:
*         content:
*            application/x-www-form-urlencoded:
*               schema:
*                  type: object
*                  properties:
*                     first_name:
*                        type: string
*                     last_name:
*                        type: string
*                     email:
*                        type: string
*                        format: email
*                     contact_no:
*                        type: string
*                     user_type:
*                        type: integer
*                     password:
*                        type: string
*                        format: password
*            application/json:
*               schema:
*                  type: object
*                  properties:
*                     first_name:
*                        type: string
*                     last_name:
*                        type: string
*                     email:
*                        type: string
*                        format: email
*                     contact_no:
*                        type: string
*                     user_type:
*                        type: integer
*                     password:
*                        type: string
*                        format: password
*      responses:
*          '200':
*              description: User Registered
*              application/json:
*/
router.post('/', fieldValidation.validate('newUser'), fieldValidation.fieldVerification, controller.registration, errors);

module.exports = router;
