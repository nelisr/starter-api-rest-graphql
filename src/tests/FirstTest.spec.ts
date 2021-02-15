import { User } from '@/entities/user'

test('espera ...', () => {
  const user = new User()
  user.name = 'Nelis'
  expect(user.name).toEqual('Nelis')
})
