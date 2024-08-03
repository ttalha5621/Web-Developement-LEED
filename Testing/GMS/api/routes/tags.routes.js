const express = require('express');

const router = express.Router();
const fieldValidation = require('../helpers/fieldValidation.helper');
const controller = require('../controller/tag.controller');
// const auth = require('../middleware/auth');
// const permission = require('../permissions/role.permission');
// const config = require('../../config');
const errors = require('../middleware/errors');

/**
  * @swagger
  * /tags:
  *  get:
  *      tags:
  *          - Tag
  *      name: Tag
  *      produces:
  *          - application/json
  *      consumes:
  *          - application/json
  *      summary: This should get all Tag.
  *      responses:
  *          '200':
  *              description: Received Tag
  *              application/json:
  */
// Permission level will be get from env file.
router.get('/', [controller.getTags, errors]);

/**
   * @swagger
   * /tags/{id}:
   *  get:
   *      tags:
   *          - Tag
   *      name: Tag
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should get Tag by id.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: Received Tag by id.
   *              application/json:
   */
router.get('/:id', [controller.getTagById, errors]);

/**
   * @swagger
   * /tags:
   *  post:
   *      tags:
   *          - Tag
   *      name: Tag
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should add new Tag.
   *      requestBody:
   *         content:
   *            application/x-www-form-urlencoded:
   *               schema:
   *                  type: object
   *                  properties:
   *                     QrCode:
   *                        type: string
   *            application/json:
   *               schema:
   *                  type: object
   *                  properties:
   *                     QrCode:
   *                        type: string
   *      responses:
   *          '200':
   *              description: Tag is added
   *              application/json:
   */
router.post('/', [fieldValidation.validate('newTag'), fieldValidation.fieldVerification, controller.newTag, errors]);

/**
   * @swagger
   * /tags/{id}:
   *  put:
   *      tags:
   *          - Tag
   *      name: Tag
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should update the tag.
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
   *                     QrCode:
   *                        type: string
   *            application/json:
   *               schema:
   *                  type: object
   *                  properties:
   *                     QrCode:
   *                        type: string
   *      responses:
   *          '200':
   *              description: Tag is updated
   *              application/json:
   */
router.put('/:id', [fieldValidation.validate('updateTag'), fieldValidation.fieldVerification, controller.updateTag, errors]);

/**
   * @swagger
   * /tags/{id}:
   *  delete:
   *      tags:
   *          - Tag
   *      name: Tag
   *      produces:
   *          - application/json
   *      consumes:
   *          - application/json
   *      summary: This should delete Tag.
   *      parameters:
   *          - name: id
   *            in: path
   *            type: string
   *            format: uuid
   *            require: true
   *      responses:
   *          '200':
   *              description: Tag Deleted
   *              application/json:
   */
router.delete('/:id', [controller.deleteTag, errors]);

module.exports = router;
