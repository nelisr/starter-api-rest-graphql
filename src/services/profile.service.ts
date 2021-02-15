import { Profile } from '@/entities/profile'
import { ProfileRepository } from '@/repositories/profile.repository'
import { getCustomRepository } from 'typeorm'

export class ProfileService {
  public async save (data: Profile): Promise<Profile> {
    try {
      const repository = getCustomRepository(ProfileRepository)
      return await repository.save(data)
    } catch (err) {
      throw new Error(err)
    }
  }
}
export default new ProfileService()
