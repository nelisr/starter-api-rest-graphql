import { DB_CONNECTION, DB_HOST, DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER, DB_LOGGER } from './src/config/config'

// eslint-disable-next-line eqeqeq
const logging = DB_LOGGER == 'true'

export default {
  type: DB_CONNECTION,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: false,
  logging,
  entities: [__dirname, 'src/models/**/*.{ts,js}'],
  migrations: [__dirname, 'src/migrations/**/*.{ts,js}'],
  cli: {
    migrationsDir: 'src/migrations',
    entitiesDir: 'src/models'
  }
}
