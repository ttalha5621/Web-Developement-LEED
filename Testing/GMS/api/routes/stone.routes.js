const express = require('express');

const router = express.Router();
const fieldValidation = require('../helpers/fieldValidation.helper');
const controller = require('../controller/stone.controller');
// const auth = require('../middleware/auth');
// const permission = require('../permissions/role.permission');
// const config = require('../../config');
const errors = require('../middleware/errors');

/**
  * @swagger
  * /stones:
  *  get:
  *      tags:
  *          - Stone
  *      name: Stone
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should get all Stones.
  *      responses:
  *          '200':
  *              description: Received Stone.
  *              application/json:
  */
// Permission level will be get from env file.
router.get('/', [controller.getStones, errors]);

/**
   * @swagger
   * /stones/{id}:
   *  get:
   *      tags:
   *          - Stone
   *      name: Stone
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should get stone by id.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: Received stone by id.
   *              application/json:
   */
router.get('/:id', [controller.getStoneById, errors]);

/**
   * @swagger
   * /stones:
   *  post:
   *      tags:
   *          - Stone
   *      name: Stone
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should add new stone.
   *      requestBody:
   *         content:
   *            application/x-www-form-urlencoded:
   *               schema:
   *                  type: object
   *                  properties:
   *                     name:
   *                        type: string
   *                     weight:
   *                        type: integer
   *                     unit:
   *                        type: string
   *            application/json:
   *               schema:
   *                  type: object
   *                  properties:
   *                     name:
   *                        type: string
   *                     weight:
   *                        type: integer
   *                     unit:
   *                        type: char
   *      responses:
   *          '200':
   *              description: Stone is added
   *              application/json:
   */
router.post('/', [fieldValidation.validate('newStone'), fieldValidation.fieldVerification, controller.newStone, errors]);

/**
   * @swagger
   * /stones/{id}:
   *  put:
   *      tags:
   *          - Stone
   *      name: Stone
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should update the stone.
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
   *                     weight:
   *                        type: integer
   *                     unit:
   *                        type: string
   *            application/json:
   *               schema:
   *                  type: object
   *                  properties:
   *                     name:
   *                        type: string
   *                     weight:
   *                        type: integer
   *                     unit:
   *                        type: char
   *      responses:
   *          '200':
   *              description: Stone is updated
   *              application/json:
   */
router.put('/:id', [fieldValidation.validate('updateStone'), fieldValidation.fieldVerification, controller.updateStone, errors]);

/**
   * @swagger
   * /stones/{id}:
   *  delete:
   *      tags:
   *          - Stone
   *      name: Stone
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should delete Stone.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: Stone Deleted
   *              application/json:
   */
router.delete('/:id', [controller.deleteStone, errors]);
module.exports = router;
