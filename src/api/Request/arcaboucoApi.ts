import axios from 'axios'
import { parseCookies } from 'nookies'

export const arcaboucoApi = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ENV === 'prod'
      ? 'https://api.arcabouco.com.br'
      : 'http://localhost:3040'
})

arcaboucoApi.interceptors.request.use(config => {
  const { 'arcabouco-token': jwtToken } = parseCookies()

  if (jwtToken)
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${jwtToken}`
    }

  return config
})
