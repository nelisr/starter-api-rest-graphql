import { Profile } from '@/models/profile'
import ProfileService from '@/services/profile.service'

export const profileResolver = {
  Query: {
    async showProfile (_:any, { id }: any): Promise<Profile> {
      return await ProfileService.show(id)
    },
    async listProfiles (): Promise<Profile[]> {
      return await ProfileService.list()
    },
    async pageProfiles (_:any, { input, inputPage }: any): Promise<Profile[]> {
      return await ProfileService.page(input, inputPage)
    }
  },
  Mutation: {
    async createProfile (_:any, { input }: any): Promise<Profile> {
      return await ProfileService.create(input)
    },
    async updateProfile (_:any, { id, input }: any): Promise<Profile> {
      return await ProfileService.update(id, input)
    },
    async deleteProfile (_:any, { id }: any): Promise<Profile> {
      return await ProfileService.delete(id)
    }
  }
}
