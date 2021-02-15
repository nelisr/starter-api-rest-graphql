import express from 'express'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'
import { schemaWithResolvers } from './graphql'
import Routes from './routes'

import 'reflect-metadata'
import { createConnection } from 'typeorm'

class App {
  public express: express.Application

  public constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
    this.graphql()

    this.database()
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(cors({
      allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'X-Access-Token'],
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
      origin: '*',
      preflightContinue: false
    }))
  }

  private routes (): void {
    this.express.use('/', Routes)
  }

  private graphql (): void {
    this.express.use('/graphql', graphqlHTTP({
      schema: schemaWithResolvers,
      graphiql: true
    }))
  }

  private async database (): Promise<any> {
    await createConnection()
  }
}

export default new App().express
