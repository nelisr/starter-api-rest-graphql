import { getCustomRepository } from 'typeorm'
import { IAuthInput } from '../interfaces/auth-input.interface'
import { IAuthResponse } from '../interfaces/auth-response.interface'
import { UserRepository } from '../repositories/user.repository'
import { JWT_SECRET, JWT_TIME, JWT_ALGORITHM } from '@/config/config'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export class AuthService {
  public async login (input: IAuthInput): Promise<IAuthResponse> {
    try {
      const repository = getCustomRepository(UserRepository)
      const { email, password } = input
      const user = await repository.findOne({
        where: { email },
        relations: ['profile'],
        select: ['id', 'name', 'email', 'password', 'profile']
      })
      const comparePasswords = bcrypt.compareSync(password, user.password)

      if (!user || !comparePasswords) {
        throw new Error('Usuário/Senha inválidos')
      }

      const secret = JWT_SECRET
      const payload = { id: user.id, name: user.name, email: user.email, profile: user.profile.name }
      const expiresIn = JWT_TIME
      const algorithm = JWT_ALGORITHM
      const token = jwt.sign(payload, secret, { expiresIn, algorithm })

      return { token }
    } catch (err) {
      throw new Error(err)
    }
  }
}
export default new AuthService()
