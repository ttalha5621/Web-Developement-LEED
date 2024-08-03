const express = require('express');

const router = express.Router();
const fieldValidation = require('../helpers/fieldValidation.helper');
const controller = require('../controller/rate.controller');
const auth = require('../middleware/auth');
const permission = require('../permissions/role.permission');
const config = require('../../config');
const errors = require('../middleware/errors');

/**
   * @swagger
   * /rate:
   *  get:
   *      tags:
   *          - Rate
   *      name: Rate
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should get all rates.
   *      responses:
   *          '200':
   *              description: Received rates.
   *              application/json:
   */
router.get('/', [controller.getRates, errors]);

/**
   * @swagger
   * /rate/{id}:
   *  get:
   *      tags:
   *          - Rate
   *      name: Rate
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should get rate by id.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: Received rate by id.
   *              application/json:
   */
router.get('/:id', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), controller.getRateById, errors]);

/**
  * @swagger
  * /rate:
  *  post:
  *      tags:
  *          - Rate
  *      name: Rate
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should add new rate.
  *      requestBody:
  *         content:
  *            application/x-www-form-urlencoded:
  *               schema:
  *                  type: object
  *                  properties:
  *                     quantity:
  *                        type: integer
  *                     unit:
  *                        type: string
  *                     price:
  *                        type: integer
  *                     date:
  *                        type: string
  *                        format: date
  *      responses:
  *          '200':
  *              description: Rate is added
  *              application/json:
  */

router.post('/', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), fieldValidation.validate('addRate'), fieldValidation.fieldVerification, controller.addRate, errors]);

/**
   * @swagger
   * /rate/{id}:
   *  put:
   *      tags:
   *          - Rate
   *      name: Rate
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should update the Rate information by given id
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      requestBody:
   *         content:
   *            application/x-www-form-urlencoded:
   *               schema:
   *                  type: object
   *                  properties:
   *                     quantity:
   *                        type: integer
   *                     unit:
   *                        type: string
   *                     price:
   *                        type: integer
   *                     date:
   *                        type: string
   *                        format: date
   *      responses:
   *          '200':
   *              description: Rate is updated
   *              application/json:
   */
router.put('/:id', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), fieldValidation.validate('addRate'), fieldValidation.fieldVerification, controller.updateRate, errors]);

/**
  * @swagger
  * /rate/{id}:
  *  delete:
  *      tags:
  *          - Rate
  *      name: Rate
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should delete the Rate by given id
  *      parameters:
  *          - name: id
  *            in: path
  *            type: string
  *            format: uuid
  *            require: true
  *      responses:
  *          '200':
  *              description: Rate Deleted
  *              application/json:
  */
router.delete('/:id', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), controller.deleteRate, errors]);

module.exports = router;
