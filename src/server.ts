import app from './app'
import Log from '@/helpers/log'

app.listen({ port: 3333 }, () => {
  Log.info('Listening in port 3333')
})
