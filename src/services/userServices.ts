import { User } from '@prisma/client'
import { db } from '~/utils/db.server'

/* eslint-disable no-useless-catch */
const findUser = (data: any) => {
  try {
    const newData = {
      ...data,
      type: 'HOT'
    }
    return newData
  } catch (error) {
    throw error
  }
}
// const queryUsers = async <Key extends keyof User>(
//   filter: object,
//   options: {
//     limit?: number
//     page?: number
//     sortBy?: string
//     sortType?: 'asc' | 'desc'
//   },
//   keys: Key[] = [
//     'id',
//     'email',
//     'name',
//     'password',
//     'status',
//     'created_at',
//     'updated_at'
//   ] as Key[]
// ): Promise<Pick<User, Key>[]> => {
//   const page = options.page ?? 1
//   const limit = options.limit ?? 10
//   const sortBy = options.sortBy
//   const sortType = options.sortType ?? 'desc'
//   const users = await db.user.findMany()
//   return users as Pick<User, Key>[]
// }

const all = async () => {
  return await db.user.findMany({
    include: {
      refreshTokens: true
    }
  })
}

export const userServices = {
  findUser,
  all
}
