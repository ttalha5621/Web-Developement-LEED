const express = require('express');

const router = express.Router();
const controller = require('../controller/signIn.controller');
const fieldValidation = require('../helpers/fieldValidation.helper');
const errors = require('../middleware/errors');

/**
  * @swagger
  * /signin/user:
  *  post:
  *      tags:
  *          - Sign In
  *      name: Sign In
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: To Sign In the user.
  *      requestBody:
  *         content:
  *            application/x-www-form-urlencoded:
  *            application/json:
  *               schema:
  *                  type: object
  *                  properties:
  *                     email:
  *                        type: string
  *                        format: email
  *                     password:
  *                        type: string
  *                        format: password
  *      responses:
  *          '200':
  *              description: Unique Token of the user.
  *              application/json:
  */
router.post('/user', fieldValidation.validate('signIn'), fieldValidation.fieldVerification, controller.signIn, errors);

module.exports = router;
