import { Request, Response, NextFunction } from 'express'
import jwt, { VerifyOptions } from 'jsonwebtoken'
import { JWT_SECRET, JWT_ALGORITHM } from '@/config/config'
import ErrorHandler from '@/handlers/ErrorHandler'

export const authorization = async (req:Request, res: Response, next: NextFunction) => {
  try {
    await verifyToken(req)
    next()
  } catch (err) {
    res.status(401).send(err)
  }
}

export const verifyToken = async (req: Request) => {
  try {
    const { authorization } = req.headers

    if (!authorization) {
      throw new Error('Sem autorização para acessar esse recurso')
    }

    const secret = JWT_SECRET
    const token = authorization.replace('Bearer ', '')

    jwt.verify(token, secret, { algorithms: [JWT_ALGORITHM] } as VerifyOptions)
  } catch (err) {
    throw new ErrorHandler('Unauthorized', 401, err.message)
  }
}
