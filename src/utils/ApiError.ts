export class ApiError extends Error {
  statusCode: number
  constructor(statusCode: any, message: any) {
    super(message)

    this.name = 'ApiError'

    this.statusCode = statusCode

    Error.captureStackTrace(this, this.constructor)
  }
}
