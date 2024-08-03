const express = require('express');

const router = express.Router();
const controller = require('../controller/token.controller');
const errors = require('../middleware/errors');

/**
 * @swagger
 * /token:
 *    post:
 *      tags:
 *          - Tokens
 *      name: Tokens
 *      produces:
 *          - application/json
 *      consumes:
 *        - application/json
 *      summary: generate jwt token.
 *      requestBody:
 *         content:
 *            application/json:
 *               schema:
 *                  type: object
 *                  properties:
 *                     email:
 *                        type: string
 *                        format: email
 *      responses:
 *          '200':
 *              description: Receive Unique Token.
 *              application/json:
 */
router.post('/', controller.jwtToken, errors);

module.exports = router;
