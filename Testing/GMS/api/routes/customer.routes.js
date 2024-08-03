const express = require('express');

const router = express.Router();
const fieldValidation = require('../helpers/fieldValidation.helper');
const controller = require('../controller/customer.controller');
const auth = require('../middleware/auth');
const permission = require('../permissions/role.permission');
const config = require('../../config');
const errors = require('../middleware/errors');

/**
  * @swagger
  * /customers:
  *  get:
  *      tags:
  *          - Customer
  *      name: Customer
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should get all Customer.
  *      responses:
  *          '200':
  *              description: Received Customer.
  *              application/json:
  */
// Permission level will be get from env file.
router.get('/', [controller.getCustomers, errors]);

/**
  * @swagger
  * /customers/{id}:
  *  get:
  *      tags:
  *          - Customer
  *      name: Customer
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should get Customer by id.
  *      parameters:
  *          - name: id
  *            in: path
  *            type: string
  *            format: uuid
  *            require: true
  *      responses:
  *          '200':
  *              description: Received Customer by id.
  *              application/json:
  */
router.get('/:id', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), controller.getCustomerById, errors]);

/**
  * @swagger
  * /customers/{id}:
  *  put:
  *      tags:
  *          - Customer
  *      name: Customer
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should update the customer information by given id
  *      parameters:
  *          - name: id
  *            in: path
  *            type: string
  *            format: uuid
  *            require: true
  *      requestBody:
  *         content:
  *            application/x-www-form-urlencoded:
  *            application/json:
  *               schema:
  *                  type: object
  *                  properties:
  *                     bank_account_no:
  *                        type: string
  *      responses:
  *          '200':
  *              description: User is updated
  *              application/json:
  */
router.put('/:id', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), fieldValidation.validate('addCustomer'), fieldValidation.fieldVerification, controller.updateCustomer, errors]);

/**
   * @swagger
   * /customers/{id}:
   *  delete:
   *      tags:
   *          - Customer
   *      name: Customer
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should delete Customer.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: Customer Deleted
   *              application/json:
   */
router.delete('/:id', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), controller.deleteCustomer, errors]);

module.exports = router;
