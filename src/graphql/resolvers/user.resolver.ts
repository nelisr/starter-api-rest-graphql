import { User } from '@/models/user'
import UserService from '@/services/user.service'
import { verifyToken } from '@/middlewares/authorization'

export const userResolver = {
  Query: {
    async showUser (_:any, { id }: any, context: any): Promise<User> {
      await verifyToken(context)
      return await UserService.show(id)
    },
    async listUsers (_:any, { id }: any, context: any): Promise<User[]> {
      await verifyToken(context)
      return await UserService.list()
    },
    async pageUsers (_:any, { input, inputPage }: any, context: any): Promise<User[]> {
      await verifyToken(context)
      return await UserService.page(input, inputPage)
    }
  },
  Mutation: {
    async createUser (_:any, { input }: any, context: any): Promise<User> {
      await verifyToken(context)
      return await UserService.create(input)
    },
    async updateUser (_:any, { id, input }: any, context: any): Promise<User> {
      await verifyToken(context)
      return await UserService.update(id, input)
    },
    async deleteUser (_:any, { id }: any, context: any): Promise<User> {
      await verifyToken(context)
      return await UserService.delete(id)
    }
  }
}
