import { User } from '@/models/user'
import UserService from '@/services/user.service'

export const userResolver = {
  Query: {
    async showUser (_:any, { id }: any): Promise<User> {
      return await UserService.show(id)
    },
    async listUsers (): Promise<User[]> {
      return await UserService.list()
    },
    async pageUsers (_:any, { input, inputPage }: any): Promise<User[]> {
      return await UserService.page(input, inputPage)
    }
  },
  Mutation: {
    async createUser (_:any, { input }: any): Promise<User> {
      return await UserService.create(input)
    },
    async updateUser (_:any, { id, input }: any): Promise<User> {
      return await UserService.update(id, input)
    },
    async deleteUser (_:any, { id }: any): Promise<User> {
      return await UserService.delete(id)
    }
  }
}
