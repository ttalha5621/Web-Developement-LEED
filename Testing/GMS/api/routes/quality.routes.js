const express = require('express');

const router = express.Router();
const fieldValidation = require('../helpers/fieldValidation.helper');
const controller = require('../controller/quality.controller');
const auth = require('../middleware/auth');
const permission = require('../permissions/role.permission');
const config = require('../../config');
const errors = require('../middleware/errors');

/**
  * @swagger
  * /quality:
  *  get:
  *      tags:
  *          - Quality
  *      name: Quality
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should get all Quality.
  *      responses:
  *          '200':
  *              description: Received Quality.
  *              application/json:
  */
router.get('/', [controller.getQuality, errors]);

/**
  * @swagger
  * /quality/{id}:
  *  get:
  *      tags:
  *          - Quality
  *      name: Quality
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should get Quality by id.
  *      parameters:
  *          - name: id
  *            in: path
  *            type: string
  *            format: uuid
  *            require: true
  *      responses:
  *          '200':
  *              description: Received Quality by id.
  *              application/json:
  */
router.get('/:id', [controller.getQualityById, errors]);

/**
  * @swagger
  * /quality:
  *  post:
  *      tags:
  *          - Quality
  *      name: Quality
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should add new Quality.
  *      requestBody:
  *         content:
  *            application/x-www-form-urlencoded:
  *               schema:
  *                  type: object
  *                  properties:
  *                     name:
  *                        type: string
  *      responses:
  *          '200':
  *              description: Quality is added
  *              application/json:
  */
router.post('/', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), fieldValidation.validate('addQuality'), fieldValidation.fieldVerification, controller.addQuality, errors]);

/**
  * @swagger
  * /quality/{id}:
  *  put:
  *      tags:
  *          - Quality
  *      name: Quality
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should update the quality information by given id
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
  *                     name:
  *                        type: string
  *      responses:
  *          '200':
  *              description: User is updated
  *              application/json:
  */
router.put('/:id', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), fieldValidation.validate('addQuality'), fieldValidation.fieldVerification, controller.updateQuality, errors]);

/**
   * @swagger
   * /quality/{id}:
   *  delete:
   *      tags:
   *          - Quality
   *      name: Quality
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should delete Quality.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: Quality Deleted
   *              application/json:
   */
router.delete('/:id', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), controller.deleteQuality, errors]);

module.exports = router;
