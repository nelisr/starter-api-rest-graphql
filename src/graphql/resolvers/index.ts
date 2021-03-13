import { userResolver } from './user.resolver'
import { profileResolver } from './profile.resolver'
import { authResolver } from './auth.resolver'
import { applicationResolver } from './application.resolver'
import { functionalityResolver } from './functionality.resolver'

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...profileResolver.Query,
    ...authResolver.Query,
    ...applicationResolver.Query,
    ...functionalityResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...profileResolver.Mutation,
    ...applicationResolver.Mutation,
    ...functionalityResolver.Mutation
  }
}
