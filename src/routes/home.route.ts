
import express from 'express'
import HomeController from '../controllers/home.controller'

class HomeRoutes {
  public route: express.Router = express.Router();

  constructor () {
    this.index()
  }

  public index (): express.Router {
    return this.route.get('/', HomeController.index)
  }
}

export default new HomeRoutes().route
