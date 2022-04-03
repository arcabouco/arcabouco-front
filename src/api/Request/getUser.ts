import { User } from '../interfaces/User'
import { arcaboucoApi } from './arcaboucoApi'

export const getUser = async (): Promise<User> => {
  const { data } = await arcaboucoApi({
    method: 'GET',
    url: `/user/`
  })

  return {
    email: data.user.email,
    id: data.user.id,
    lastName: data.user.lastName,
    name: data.user.name,
    role: data.user.role
  }
}
