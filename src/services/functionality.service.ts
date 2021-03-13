import Functionality from '@/models/Functionality'
import { FunctionalityRepository } from '@/repositories/functionality.repository'
import { getCustomRepository, ILike } from 'typeorm'
import { IFunctionalityInput } from '@/interfaces/functionality-input.interface'
import { IPageInput } from '@/interfaces/page-input.interface'

export class FunctionalityService {
  public async page (input: IFunctionalityInput, inputPage: IPageInput): Promise<Functionality[]> {
    try {
      const repository = getCustomRepository(FunctionalityRepository)
      const { page, size, order, descingOrder } = inputPage
      const query = {
        name: ILike(`%${input.name}%`),
        key: ILike(`%${input.key}%`),
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

  public async list (): Promise<Functionality[]> {
    try {
      const repository = getCustomRepository(FunctionalityRepository)
      return await repository.find()
    } catch (err) {
      throw new Error(err)
    }
  }

  public async show (id: number): Promise<Functionality> {
    try {
      const repository = getCustomRepository(FunctionalityRepository)
      return await repository.findOneOrFail(id)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async create (data: Functionality): Promise<Functionality> {
    try {
      const repository = getCustomRepository(FunctionalityRepository)
      return await repository.save(data)
    } catch (err) {
      throw new Error(err.detail)
    }
  }

  public async update (id: number, data: Functionality): Promise<Functionality> {
    try {
      const repository = getCustomRepository(FunctionalityRepository)
      const functionality = await repository.findOneOrFail(id)
      const profileFunctionalities = data.profileFunctionality.map(d => ({ ...d, functionality: `${functionality.id}` }))
      const data2 = { ...functionality, ...data }
      const body: any = { ...data2, profileFunctionality: profileFunctionalities }
      console.log('=======')
      console.log(body)
      console.log('=======')
      return await repository.save(body)
    } catch (err) {
      throw new Error(err)
    }
  }

  public async delete (id: number): Promise<any> {
    try {
      const repository = getCustomRepository(FunctionalityRepository)
      const profile = await repository.findOneOrFail(id)
      await repository.delete(id)
      return profile
    } catch (err) {
      throw new Error(err)
    }
  }
}
export default new FunctionalityService()
