import { Profile } from '@/entities/profile'
import ProfileService from '@/services/profile.service'

export const profileResolver = {
  Query: {
    profiles (): Array<Profile> {
      return []
    }
  },
  Mutation: {
    createProfile (_:any, { input }: any): Promise<Profile> {
      return ProfileService.save(input)
    }
  }
}
