/* eslint-disable no-useless-catch */
const findUser = (data) => {
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

export const userServices = {
  findUser
}
