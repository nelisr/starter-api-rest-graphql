import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '@/config/config'

export const authorization = async (req:Request, res: Response, next: NextFunction) => {
  try {
    await verifyToken(req)
    next()
  } catch (err) {
    res.status(401).send({ status: 401, error: 'Unauthorized', message: err.message, timestamp: new Date() })
  }
}

export const verifyToken = async (req: Request) => {
  const { authorization } = req.headers

  if (!authorization) {
    throw new Error('Não autorizado para exercutar essa ação')
  }

  const secret = JWT_SECRET
  const token = authorization.replace('Bearer ', '')
  await jwt.verify(token, secret)
}
