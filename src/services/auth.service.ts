import { getCustomRepository } from 'typeorm'
import { IAuthInput } from '../interfaces/auth-input.interface'
import { IAuthResponse } from '../interfaces/auth-response.interface'
import { UserRepository } from '../repositories/user.repository'
import { JWT_SECRET, JWT_TIME, JWT_ALGORITHM } from '@/config/config'
import bcrypt from 'bcrypt'
import jwt, { SignOptions } from 'jsonwebtoken'
import ErrorHandler from '@/handlers/ErrorHandler'

export class AuthService {
  public async login (input: IAuthInput): Promise<IAuthResponse> {
    try {
      const repository = getCustomRepository(UserRepository)
      const { email, password } = input
      const user = await repository.findOne({
        where: { email },
        select: ['id', 'name', 'email', 'password']
      })

      if (!user) {
        throw new Error('Usuário/Senha inválidos')
      }

      const comparePasswords = bcrypt.compareSync(password, user.password)

      if (!comparePasswords) {
        throw new Error('Usuário/Senha inválidos')
      }

      // verificar se o usuário tem acesso a essa aplicação
      // adicionar no payload o id da aplicação e o ultimo acesso a aplicação
      // sempre que der tudo certo nas verificaçõea anteriores deve ser criado um registro na tavela de logs de acesso

      const secret = JWT_SECRET
      const payload = { id: user.id, name: user.name, email: user.email }
      const expiresIn = JWT_TIME
      const algorithm = JWT_ALGORITHM
      const token = jwt.sign(payload, secret, { expiresIn, algorithm } as SignOptions)

      return { token }
    } catch (err) {
      throw new ErrorHandler('Unauthorized', 401, err.message)
    }
  }
}
export default new AuthService()
