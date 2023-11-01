import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { userRouters } from './userRouters'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'Apis V1 ready to use' })
})

/** === User routers */
Router.use('/user', userRouters)

export const APIs_V1 = Router
