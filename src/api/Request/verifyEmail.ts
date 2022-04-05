import { arcaboucoApi } from './arcaboucoApi'

export const verifyEmail = async (
  email: string
): Promise<{ isAvailable: boolean }> => {
  if (!email || email.length === 0) return { isAvailable: true }

  const { data } = await arcaboucoApi({
    method: 'GET',
    url: `/user/email/${email}`
  })

  return { isAvailable: data.isAvailable }
}
