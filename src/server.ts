import app from './app'
import Log from '@/helpers/log'

app.listen({ port: 3333 }, () => {
  Log.info(`Enviroment: ${process.env.NODE_ENV}`)
  Log.info(`Versão: ${process.env.npm_package_version}`)
  Log.info('Listening in port 3333')
})
