import { DB_CONNECTION, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER, DB_SCHEMA } from './src/config/config'

export default {
  type: DB_CONNECTION,
  schema: DB_SCHEMA,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: false,
  logging: false,
  entities: ['src/models/**/*.{ts,js}'],
  migrations: ['src/migrations/**/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/models'
  }
}
