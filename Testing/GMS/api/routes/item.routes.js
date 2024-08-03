const express = require('express');

const router = express.Router();
const fieldValidation = require('../helpers/fieldValidation.helper');
const controller = require('../controller/item.controller');
const errors = require('../middleware/errors');

/**
  * @swagger
  * /items:
  *  get:
  *      tags:
  *          - Item
  *      name: Item
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should get all Items.
  *      responses:
  *          '200':
  *              description: Received Item.
  *              application/json:
  */
router.get('/', [controller.getItems, errors]);

/**
  * @swagger
  * /items/{id}:
  *  get:
  *      tags:
  *          - Item
  *      name: Item
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should get Item by id.
  *      parameters:
  *          - name: id
  *            in: path
  *            type: string
  *            format: uuid
  *            require: true
  *      responses:
  *          '200':
  *              description: Received Item by id.
  *              application/json:
  */
router.get('/:id', [controller.getItemById, errors]);

/**
   * @swagger
   * /items:
   *  post:
   *      tags:
   *          - Item
   *      name: Item
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should add new item.
   *      requestBody:
   *         content:
   *            application/x-www-form-urlencoded:
   *               schema:
   *                  type: object
   *                  properties:
   *                     name:
   *                        type: string
   *                     laborCost:
   *                        type: number
   *                        format: float
   *                     polishPercent:
   *                        type: number
   *                        format: float
   *                     manufacturingCost:
   *                        type: number
   *                        format: float
   *                     weight:
   *                        type: number
   *                        format: float
   *            application/json:
   *               schema:
   *                  type: object
   *                  properties:
   *                     name:
   *                        type: string
   *                     laborcost:
   *                        type: number
   *                        format: float
   *                     polishpercent:
   *                        type: number
   *                        format: float
   *                     manufacturingCost:
   *                        type: number
   *                        format: float
   *                     weight:
   *                        type: number
   *                        format: float
   *
   *      responses:
   *          '200':
   *              description: Item is added
   *              application/json:
   */
router.post('/', [fieldValidation.validate('newItem'), fieldValidation.fieldVerification, controller.newItem, errors]);

/**
  * @swagger
  * /items/{id}:
  *  put:
  *      tags:
  *          - Item
  *      name: Item
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should update the item information by given id
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
  *                     laborcost:
  *                        type: number
  *                        format: float
  *                     polishpercent:
  *                        type: number
  *                        format: float
  *                     manufacturingCost:
  *                        type: number
  *                        format: float
  *                     weight:
  *                        type: number
  *                        format: float
  *            application/json:
  *               schema:
  *                  type: object
  *                  properties:
  *                     name:
  *                        type: string
  *                     laborcost:
  *                        type: number
  *                        format: float
  *                     polishpercent:
  *                        type: number
  *                        format: float
  *                     manufacturingCost:
  *                        type: number
  *                        format: float
  *                     weight:
  *                        type: number
  *                        format: float
  *      responses:
  *          '200':
  *              description: Item is updated
  *              application/json:
  */
router.put('/:id', [fieldValidation.validate('updateItem'), fieldValidation.fieldVerification, controller.updateItem, errors]);

/**
   * @swagger
   * /items/{id}:
   *  delete:
   *      tags:
   *          - Item
   *      name: Item
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should delete Item.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: Item Deleted
   *              application/json:
   */
router.delete('/:id', [controller.deleteItem, errors]);

module.exports = router;
