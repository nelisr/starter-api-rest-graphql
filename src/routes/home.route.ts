
import express from 'express'
import HomeController from '@/controllers/home.controller'
import { authorization } from '@/middlewares/authorization'

class HomeRoutes {
  public route: express.Router = express.Router();

  constructor () {
    this.index()
    this.contato()
  }

  public index (): express.Router {
    return this.route.get('/', HomeController.index)
  }

  public contato (): express.Router {
    return this.route.get('/contato', authorization, HomeController.contato)
  }
}

export default new HomeRoutes().route
