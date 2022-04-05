import axios from 'axios'
import { parseCookies } from 'nookies'

export const arcaboucoApi = axios.create({
  baseURL:
    process.env.ENV === 'prod'
      ? 'https://api.arcabouco.org'
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
