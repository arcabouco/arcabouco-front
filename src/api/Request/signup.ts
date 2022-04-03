import { arcaboucoApi } from './arcaboucoApi'

type SignupBody = {
  name: string
  lastName: string
  email: string
  password: string
}

export const signup = async (signupBody: SignupBody): Promise<void> => {
  await arcaboucoApi({
    method: 'POST',
    data: signupBody,
    url: '/auth/signup'
  })
}
