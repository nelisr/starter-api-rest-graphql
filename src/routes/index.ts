import express from 'express'
import HomeRoutes from './home.route'
import AuthRoutes from './auth.route'

class Routes {
  public route: express.Router = express.Router()

  public constructor () {
    this.init()
  }

  private init (): void {
    this.route.use('/', HomeRoutes)
    this.route.use('/auth/', AuthRoutes)
  }
}

export default new Routes().route
