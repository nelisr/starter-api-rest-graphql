import Functionality from '@/models/Functionality'
import FunctionalityService from '@/services/functionality.service'
import { verifyToken } from '@/middlewares/authorization'

export const functionalityResolver = {
  Query: {
    async showFunctionality (_:any, { id }: any, context: any): Promise<Functionality> {
      await verifyToken(context)
      return await FunctionalityService.show(id)
    },
    async listFunctionalities (_:any, args: any, context: any): Promise<Functionality[]> {
      await verifyToken(context)

      return await FunctionalityService.list()
    },
    async pageFunctionalities (_:any, { input, inputPage }: any, context: any): Promise<Functionality[]> {
      await verifyToken(context)
      return await FunctionalityService.page(input, inputPage)
    }
  },
  Mutation: {
    async createFunctionality (_:any, { input }: any, context: any): Promise<Functionality> {
      await verifyToken(context)
      return await FunctionalityService.create(input)
    },
    async updateFunctionality (_:any, { id, input }: any, context: any): Promise<Functionality> {
      await verifyToken(context)
      return await FunctionalityService.update(id, input)
    },
    async deleteFunctionality (_:any, { id }: any, context: any): Promise<Functionality> {
      await verifyToken(context)
      return await FunctionalityService.delete(id)
    }
  }
}
