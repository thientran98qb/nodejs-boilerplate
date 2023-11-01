import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { userControllers } from '~/controllers/user.controller'
import { userValidation } from '~/validations/userValidation'

const Router = express.Router()

Router.route('/')
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: 'API get list user' })
  })
  .post(userValidation.createNew, userControllers.create)

export const userRouters = Router
