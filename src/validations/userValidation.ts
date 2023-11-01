import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'
import { ApiError } from '~/utils/ApiError'

const createNew = async (req: any, res: any, next: any) => {
  const schema = Joi.object({
    name: Joi.string().required().min(3).max(20).trim().strict().messages({
      'any.required': '{{#label}} is required',
      'string.empty': '{{#label}} cant be empty !!!',
      'string.min': '{{#label}} has min {{#limit}} characters'
    }),
    position: Joi.string().required().min(5).max(200).trim().strict()
  })
  try {
    await schema.validateAsync(req.body, { abortEarly: false })

    next()
  } catch (error: any) {
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message)
    )
  }
}

export const userValidation = {
  createNew
}
