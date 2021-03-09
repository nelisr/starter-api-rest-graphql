import { EntityRepository, Repository } from 'typeorm'
import Application from '@/models/Application'

@EntityRepository(Application)
export class ApplicationRepository extends Repository<Application> {}
