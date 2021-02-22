import Profile from '@/models/profile'
import ProfileService from '@/services/profile.service'
import { verifyToken } from '@/middlewares/authorization'

export const profileResolver = {
  Query: {
    async showProfile (_:any, { id }: any, context: any): Promise<Profile> {
      await verifyToken(context)
      return await ProfileService.show(id)
    },
    async listProfiles (_:any, args: any, context: any): Promise<Profile[]> {
      await verifyToken(context)

      return await ProfileService.list()
    },
    async pageProfiles (_:any, { input, inputPage }: any, context: any): Promise<Profile[]> {
      await verifyToken(context)
      return await ProfileService.page(input, inputPage)
    }
  },
  Mutation: {
    async createProfile (_:any, { input }: any, context: any): Promise<Profile> {
      await verifyToken(context)
      return await ProfileService.create(input)
    },
    async updateProfile (_:any, { id, input }: any, context: any): Promise<Profile> {
      await verifyToken(context)
      return await ProfileService.update(id, input)
    },
    async deleteProfile (_:any, { id }: any, context: any): Promise<Profile> {
      await verifyToken(context)
      return await ProfileService.delete(id)
    }
  }
}
