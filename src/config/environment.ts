/* eslint-disable no-undef */
import 'dotenv/config'

export const env = {
  AUTHOR: process.env.AUTHOR,
  NODE_ENV: process.env.NODE_ENV,
  MYSQL_TABLE_NAME: process.env.MYSQL_TABLE_NAME || '',
  MYSQL_USERNAME: process.env.MYSQL_USERNAME || '',
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || '',
  MYSQL_HOST: process.env.MYSQL_HOST || '',
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET
}
