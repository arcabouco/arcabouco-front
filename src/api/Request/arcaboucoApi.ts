import axios from 'axios'
import { parseCookies } from 'nookies'

export const arcaboucoApi = axios.create()

arcaboucoApi.interceptors.request.use(config => {
  const { 'arcabouco-token': jwtToken } = parseCookies()

  config.baseURL =
    process.env.ENV === 'prod'
      ? 'https://api.arcabouco.org'
      : 'http://localhost:3040'

  if (jwtToken)
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${jwtToken}`
    }

  return config
})
