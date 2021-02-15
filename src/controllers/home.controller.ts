import express from 'express'

export default class HomeController {
  public static index = (req: express.Request, res: express.Response): express.Response => {
    return res.json({ message: 'Bem Vindo API REST e Graphql' })
  }
}
