import { userResolver } from './user.resolver'
import { profileResolver } from './profile.resolver'

export const resolvers = {
  Query: {
    ...userResolver.Query,
    ...profileResolver.Query
  },
  Mutation: {
    ...userResolver.Mutation,
    ...profileResolver.Mutation
  }
}
