import Application from '@/models/Application'
import ApplicationService from '@/services/application.service'
import { verifyToken } from '@/middlewares/authorization'

export const applicationResolver = {
  Query: {
    async showApplication (_:any, { id }: any, context: any): Promise<Application> {
      await verifyToken(context)
      return await ApplicationService.show(id)
    },
    async listApplications (_:any, args: any, context: any): Promise<Application[]> {
      await verifyToken(context)

      return await ApplicationService.list()
    },
    async pageApplications (_:any, { input, inputPage }: any, context: any): Promise<Application[]> {
      await verifyToken(context)
      return await ApplicationService.page(input, inputPage)
    }
  },
  Mutation: {
    async createApplication (_:any, { input }: any, context: any): Promise<Application> {
      await verifyToken(context)
      return await ApplicationService.create(input)
    },
    async updateApplication (_:any, { id, input }: any, context: any): Promise<Application> {
      await verifyToken(context)
      return await ApplicationService.update(id, input)
    },
    async deleteApplication (_:any, { id }: any, context: any): Promise<Application> {
      await verifyToken(context)
      return await ApplicationService.delete(id)
    }
  }
}
