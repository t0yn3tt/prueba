import { Router } from 'express'

import { getPersons, createPerson, getPerson, deletePerson, editPerson, uploadController } from '../controllers/personcontroller'

import  uploadFile  from '../util/uploadFile'

const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Person:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: the auto-generated id of the person
 *              name:
 *                  type: string
 *                  description: the name of the person
 *              last_name: 
 *                  type: string
 *                  description: the last_name of the person
 *              age: 
 *                  type: integer
 *                  description: the age of the person
 *              phone: 
 *                  type: string
 *                  description: the phone of the person
 *              gender: 
 *                  type: string
 *                  description: the gender of the person
 *          required:
 *              - name
 *          example:
 *              id: 2tImnvN4yQaFXirltJ6dA
 *              name: Edgardo
 *              last_name: Martinez
 *              age: 28
 *              phone: 2983923982
 *              gender: male
 *
 *      PersonNotFound:
 *          type: object
 *          properties: 
 *              msg:
 *                  type: string
 *                  description: a message for not found person
 *          example:
 *              msg: Person was not found
 * 
 *  parameters:
 *      personId: 
 *          in: path
 *          name: id
 *          required: true
 *          scheme:
 *              type: string
 *              description: the person id
 */

/**
 * @swagger
 * tags:
 *      name: Persons
 *      description: Person endpoint
 */

/**
 * @swagger
 * /upload:
 *  post:
 *      sumary: Upload a json file
 *      tags: [Persons]
 *      requestBody:
 *          required: true
 *          content: 
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          file:
 *                              type: file
 *      responses:
 *          200:
 *              description: Upload Succesffully
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:          
 *                              type: string
 *                          example:
 *                              msg: Upload Succesffully
 *          400:
 *              description: Please upload an json file!
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:          
 *                              type: string
 *                          example:
 *                              msg: Please upload an json file!
 *              
 */

 router.post('/upload', uploadFile.single('file'), uploadController)

/**
 * @swagger
 * /persons:
 *      get:
 *          summary: Return a Person List
 *          tags: [Persons]
 *          responses:
 *              200:
 *                  description: the list of persons
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/Person'
 */

router.get('/persons', getPersons)

/**
 * @swagger
 * /persons:
 *  post:
 *      summary: Create a new person
 *      tags: [Persons]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Person'
 *      responses:
 *          200:
 *              description: the person succesfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                      $ref: '#/components/schemas/Person'
 *          400:
 *              description: the person was not created
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:          
 *                              type: string
 *                          example:
 *                              msg: Person was not created
 */

router.post('/persons', createPerson)

/**
 * @swagger
 * /persons/{id}:
 *  get:
 *      summary: Get a person by id
 *      tags: [Persons]
 *      parameters:
 *          - $ref: '#/components/parameters/personId'
 *      responses:
 *          200:
 *              description: the person was found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Person'
 *          404:
 *              description: the person was not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/PersonNotFound'
 *                          
 */

router.get('/persons/:id', getPerson)

/**
 * @swagger
 * /persons/{id}:
 *  delete:
 *      summary: Delete a person by id
 *      tags: [Persons]
 *      parameters:
 *          - $ref: '#/components/parameters/personId'
 *      responses:
 *          200:
 *              description: The Person has been deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:          
 *                              type: string
 *                          example:
 *                              msg: The Person has been deleted
 *          404:
 *              description: the person was not found
 *              content:
 *                  application/json:
 *                      schema:
 *                      $ref: '#/components/schemas/PersonNotFound'
 */

router.delete('/persons/:id', deletePerson)

/**
 * @swagger
 * /persons/{id}:
 *  put:
 *      summary: Edit a person by id
 *      tags: [Persons]
 *      parameters:
 *          - $ref: '#/components/parameters/personId'
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Person'
 *      responses:
 *          200:
 *              description: the updated person
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Person'
 *          404:
 *              description: the person was not found
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/PersonNotFound'
 *          400:
 *              description: The Person was not edited
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              msg:          
 *                              type: string
 *                          example:
 *                              msg: The Person was not edited
 */

router.put('/persons/:id', editPerson)

export default router