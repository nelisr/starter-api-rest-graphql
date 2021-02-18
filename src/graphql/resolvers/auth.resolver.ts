import AuthService from '../../services/auth.service'

export const authResolver = {
  Query: {
    async login (_:any, { input }: any): Promise<any> {
      return await AuthService.login(input)
    }
  }
}
