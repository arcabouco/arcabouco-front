import { User } from '../interfaces/User'
import { arcaboucoApi } from './arcaboucoApi'

type LoginBody = {
  email: string
  password: string
}

export const login = async (
  loginBody: LoginBody
): Promise<{ user: User; jwtToken: string }> => {
  const { data } = await arcaboucoApi({
    method: 'POST',
    data: loginBody,
    url: '/auth/login'
  })

  return {
    jwtToken: data.jwtToken,
    user: data.user
  }
}
