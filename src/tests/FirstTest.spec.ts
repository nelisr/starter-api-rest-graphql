import { User } from '@/models/user'

test('espera ...', () => {
  const user = new User()
  user.name = 'Teste'
  expect(user.name).toEqual('Teste')
})
