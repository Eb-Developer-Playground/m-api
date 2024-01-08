export interface User {
  id: number
  name: string
  email: string
}

export interface AuthCredentials {
  username: string
  password: string
}

export const usersData: User[] = [
  {
    id: 1,
    name: 'John',
    email: 'john@mail.com'
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@mail.com'
  },
  {
    id: 3,
    name: 'Tom',
    email: 'tom@mail.com'
  }
]
