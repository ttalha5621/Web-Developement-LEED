const express = require('express');

const router = express.Router();
const fieldValidation = require('../helpers/fieldValidation.helper');
const controller = require('../controller/user.controller');
const auth = require('../middleware/auth');
const permission = require('../permissions/role.permission');
const config = require('../../config');
const errors = require('../middleware/errors');

/**
   * @swagger
   * /users:
   *  get:
   *      tags:
   *          - User
   *      name: User
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should get all users.
   *      responses:
   *          '200':
   *              description: Received users.
   *              application/json:
   */
router.get('/', [controller.getUsers, errors]);
// auth, permission.userPermissionLevelRequired(config.levelTwoPermission),

/**
   * @swagger
   * /users/{id}:
   *  get:
   *      tags:
   *          - User
   *      name: User
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should get user by id.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: Received user by id.
   *              application/json:
   */
router.get('/:id', [controller.getUserById, errors]);

/**
   * @swagger
   * /users:
   *  post:
   *      tags:
   *          - User
   *      name: User
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should add new user.
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
   *              description: User is added
   *              application/json:
   */
router.post('/', [controller.newUser, errors]);

/**
   * @swagger
   * /users/{id}:
   *  put:
   *      tags:
   *          - User
   *      name: User
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should update the user.
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
   *      responses:
   *          '200':
   *              description: User is updated
   *              application/json:
   */
router.put('/:id', [controller.updateUser, errors]);
// auth, permission.userPermissionLevelRequired(config.levelTwoPermission), fieldValidation.validate("updateUser"),
//    fieldValidation.fieldVerification,
/**
   * @swagger
   * /users/{id}:
   *  delete:
   *      tags:
   *          - User
   *      name: User
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should delete user.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: User Deleted
   *              application/json:
   */
router.delete('/:id', [auth, permission.userPermissionLevelRequired(config.levelTwoPermission), controller.deleteUser, errors]);

module.exports = router;
