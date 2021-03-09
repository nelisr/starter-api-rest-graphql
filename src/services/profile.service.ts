import Profile from '@/models/Profile'
import { ProfileRepository } from '@/repositories/profile.repository'
import { getCustomRepository } from 'typeorm'
import { IProfileInput } from '@/interfaces/profile-input.interface'
import { IPageInput } from '@/interfaces/page-input.interface'

export class ProfileService {
  public async page (input: IProfileInput, inputPage: IPageInput): Promise<Profile[]> {
    try {
      const repository = getCustomRepository(ProfileRepository)
      return await repository.find({ where: { ...input } })
    } catch (err) {
      throw new Error(err)
    }
  }

  public async list (): Promise<Profile[]> {
    try {
      const repository = getCustomRepository(ProfileRepository)
      return await repository.find()
    } catch (err) {
      throw new Error(err)
    }
  }

  public async show (id: number): Promise<Profile> {
    try {
      const repository = getCustomRepository(ProfileRepository)
      return await repository.findOneOrFail(id)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async create (data: Profile): Promise<Profile> {
    try {
      const repository = getCustomRepository(ProfileRepository)
      return await repository.save(data)
    } catch (err) {
      throw new Error(err.detail)
    }
  }

  public async update (id: number, data: Profile): Promise<Profile> {
    try {
      const repository = getCustomRepository(ProfileRepository)
      const profile = await repository.findOneOrFail(id)
      const body: any = { ...profile, ...data }
      return await repository.save(body)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async delete (id: number): Promise<any> {
    try {
      const repository = getCustomRepository(ProfileRepository)
      const profile = await repository.findOneOrFail(id)
      await repository.delete(id)
      return profile
    } catch (err) {
      throw new Error(err)
    }
  }
}
export default new ProfileService()
