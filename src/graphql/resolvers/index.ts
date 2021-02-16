import { userResolver } from './user.resolver'
import { profileResolver } from './profile.resolver'

export const resolvers = {
  ...userResolver,
  ...profileResolver
}
