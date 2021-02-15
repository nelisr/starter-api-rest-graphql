import express from 'express'
import HomeRoutes from './home.route'

class Routes {
  public route: express.Router = express.Router()

  public constructor () {
    this.init()
  }

  private init (): void {
    this.route.use('/', HomeRoutes)
  }
}

export default new Routes().route
