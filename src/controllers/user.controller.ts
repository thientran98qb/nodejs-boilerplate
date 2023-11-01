import { StatusCodes } from 'http-status-codes'
import { userServices } from '~/services/userServices'

const create = (req: any, res: any, next: any) => {
  try {
    const data = req.body
    const user = userServices.findUser(data)
    res.status(StatusCodes.ACCEPTED).json({ message: 'Created new user', user })
  } catch (error) {
    next(error)
  }
}

export const userControllers = {
  create
}
