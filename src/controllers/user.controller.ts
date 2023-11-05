import { NextFunction, Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { userServices } from '~/services/userServices'
import pick from '~/utils/pick'

const create = (req: any, res: any, next: any) => {
  try {
    const data = req.body
    const user = userServices.findUser(data)
    res.status(StatusCodes.ACCEPTED).json({ message: 'Created new user', user })
  } catch (error) {
    next(error)
  }
}
const getListsUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await userServices.all()

    res.status(StatusCodes.OK).json({ message: 'Get all users', data: users })
  } catch (error) {
    next(error)
  }
}

export const userControllers = {
  create,
  getListsUser
}
