import { config } from 'dotenv'
config()

const result = config({
  path: process.env.NODE_ENV === 'development' ? '.env' : '.env.production'
})

if (result.error) throw result.error

// DB Settings
export const DB_CONNECTION = process.env.DB_CONNECTION
export const DB_HOST = process.env.DB_HOST
export const DB_PORT = process.env.DB_PORT
export const DB_USER = process.env.DB_USERNAME
export const DB_PASSWORD = process.env.DB_PASSWORD
export const DB_DATABASE = process.env.DB_DATABASE
export const DB_LOGGER = process.env.DB_LOGGER

// JWT Settings
export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_TIME = process.env.JWT_TIME
export const JWT_ALGORITHM = process.env.JWT_ALGORITHM
