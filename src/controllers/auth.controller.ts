import { Request, Response } from 'express'
import AuthService from '@/services/auth.service'
import { IAuthResponse } from '@/interfaces/auth-response.interface'

export default class AuthController {
  public static login = async (req: Request, res: Response): Promise<Response<IAuthResponse>> => {
    try {
      const { email, password } = req.body
      const { token } = await AuthService.login({ email, password })

      return res.status(200).json({ token })
    } catch (err) {
      return res.status(401).json(err)
    }
  }
}
