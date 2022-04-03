export type User = {
  id: string
  name: string
  lastName: string
  email: string
  role: 'USER' | 'ADMIN' | 'EVALUATOR'
}
