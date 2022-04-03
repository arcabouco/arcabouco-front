import { arcaboucoApi } from './arcaboucoApi'

type SignupConfirmBody = {
  userId: string
  token: string
}

export const confirmSignup = async (body: SignupConfirmBody): Promise<void> => {
  await arcaboucoApi({
    method: 'POST',
    data: body,
    url: '/auth/confirmation'
  })
}
