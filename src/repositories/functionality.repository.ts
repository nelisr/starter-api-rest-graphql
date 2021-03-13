import { EntityRepository, Repository } from 'typeorm'
import Functionality from '@/models/Functionality'

@EntityRepository(Functionality)
export class FunctionalityRepository extends Repository<Functionality> {}
