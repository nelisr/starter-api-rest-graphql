import Application from '@/models/Application'
import { ApplicationRepository } from '@/repositories/application.repository'
import { getCustomRepository, ILike } from 'typeorm'
import { IApplicationInput } from '@/interfaces/application-input.interface'
import { IPageInput } from '@/interfaces/page-input.interface'

export class ApplicationService {
  public async page (input: IApplicationInput, inputPage: IPageInput): Promise<Application[]> {
    try {
      const repository = getCustomRepository(ApplicationRepository)
      const { page, size, order, descingOrder } = inputPage
      const query = {
        name: ILike(`%${input.name}%`),
        initials: ILike(`%${input.initials}%`),
        take: size,
        skip: page,
        order: {
          [order]: descingOrder ? 'DESC' : 'ASC'
        }
      }
      return await repository.find(query)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async list (): Promise<Application[]> {
    try {
      const repository = getCustomRepository(ApplicationRepository)
      return await repository.find()
    } catch (err) {
      throw new Error(err)
    }
  }

  public async show (id: number): Promise<Application> {
    try {
      const repository = getCustomRepository(ApplicationRepository)
      return await repository.findOneOrFail(id)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async create (data: Application): Promise<Application> {
    try {
      const repository = getCustomRepository(ApplicationRepository)
      return await repository.save(data)
    } catch (err) {
      throw new Error(err.detail)
    }
  }

  public async update (id: number, data: Application): Promise<Application> {
    try {
      const repository = getCustomRepository(ApplicationRepository)
      const profile = await repository.findOneOrFail(id)
      const body: any = { ...profile, ...data }
      return await repository.save(body)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async delete (id: number): Promise<any> {
    try {
      const repository = getCustomRepository(ApplicationRepository)
      const profile = await repository.findOneOrFail(id)
      await repository.delete(id)
      return profile
    } catch (err) {
      throw new Error(err)
    }
  }
}
export default new ApplicationService()
