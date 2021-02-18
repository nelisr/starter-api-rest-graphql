import { userResolver } from './user.resolver'
import { profileResolver } from './profile.resolver'
import { authResolver } from './auth.resolver'

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...profileResolver.Query,
    ...authResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...profileResolver.Mutation
  }
}
