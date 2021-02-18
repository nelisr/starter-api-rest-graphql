import { User } from '@/models/user'
import { UserRepository } from '@/repositories/user.repository'
import { getCustomRepository } from 'typeorm'
import { IUserInput } from '@/interfaces/user-input.interface'
import { IPageInput } from '@/interfaces/page-input.interface'
import bcrypt from 'bcrypt'

export class UserService {
  public async page (input: IUserInput, inputPage: IPageInput): Promise<User[]> {
    try {
      const repository = getCustomRepository(UserRepository)
      return await repository.find({ where: { ...input } })
    } catch (err) {
      throw new Error(err)
    }
  }

  public async list (): Promise<User[]> {
    try {
      const repository = getCustomRepository(UserRepository)
      return await repository
        .createQueryBuilder('user')
        .select(['user.id', 'user.name', 'user.email', 'profile'])
        .innerJoin('user.profile', 'profile')
        .getMany()
    } catch (err) {
      throw new Error(err)
    }
  }

  public async show (id: number): Promise<User> {
    try {
      const repository = getCustomRepository(UserRepository)
      return await repository.findOneOrFail(id)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async create (data: User): Promise<User> {
    try {
      const repository = getCustomRepository(UserRepository)

      const salt = bcrypt.genSaltSync()
      const password = bcrypt.hashSync(data.password, salt)

      const email = data.email.trim()

      const body = {
        ...data,
        password,
        email
      }

      return await repository.save(body)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async update (id: number, data: User): Promise<User> {
    try {
      const repository = getCustomRepository(UserRepository)
      const user = await repository.findOneOrFail(id)

      const email = data.email.trim()

      const body1 = {
        ...data,
        email
      }

      const body: any = { ...user, ...body1 }

      return await repository.save(body)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async delete (id: number): Promise<any> {
    try {
      const repository = getCustomRepository(UserRepository)
      const User = await repository.findOneOrFail(id)
      await repository.delete(id)
      return User
    } catch (err) {
      throw new Error(err)
    }
  }
}
export default new UserService()
