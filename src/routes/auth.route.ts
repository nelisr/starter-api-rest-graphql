
import express from 'express'
import AuthController from '../controllers/auth.controller'

class AuthRoutes {
  public route: express.Router = express.Router();

  constructor () {
    this.login()
  }

  public login (): express.Router {
    return this.route.post('/login', AuthController.login)
  }
}

export default new AuthRoutes().route
