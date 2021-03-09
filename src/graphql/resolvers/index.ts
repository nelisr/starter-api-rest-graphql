import { userResolver } from './user.resolver'
import { profileResolver } from './profile.resolver'
import { authResolver } from './auth.resolver'
import { applicationResolver } from './application.resolver'

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...profileResolver.Query,
    ...authResolver.Query,
    ...applicationResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...profileResolver.Mutation,
    ...applicationResolver.Mutation
  }
}
