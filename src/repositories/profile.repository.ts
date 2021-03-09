import { EntityRepository, Repository } from 'typeorm'
import Profile from '@/models/Profile'

@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {}
