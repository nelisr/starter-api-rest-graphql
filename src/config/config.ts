import { config } from 'dotenv'
config()

export const JWT_SECRET = process.env.JWT_SECRET
export const JWT_TIME = process.env.JWT_TIME
export const JWT_ALGORITHM = process.env.JWT_ALGORITHM
