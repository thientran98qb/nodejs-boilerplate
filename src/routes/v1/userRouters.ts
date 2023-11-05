import express from 'express'
import { userControllers } from '~/controllers/user.controller'
import { userValidation } from '~/validations/userValidation'

const Router = express.Router()

Router.route('/')
  .get(userControllers.getListsUser)
  .post(userValidation.createNew, userControllers.create)

export const userRouters = Router
