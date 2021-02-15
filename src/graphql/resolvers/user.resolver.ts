const users = [
  { id: 1, name: 'Nelis Rodrigues', email: 'nelis.rodriguess@gmail.com' },
  { id: 2, name: 'Francisco Gomes', email: 'francisco.gomes@gmail.com' }
]

export const userResolver = {
  Query: {
    users () {
      return []
    }
  },
  Mutation: {
    newUser (_: any, args: any) {
      const { name, email } = args
      users.push({ id: 3, name, email })

      return users[users.length - 1]
    }
  }
}
