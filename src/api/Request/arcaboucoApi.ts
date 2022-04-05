import axios from 'axios'
import { parseCookies } from 'nookies'

export const arcaboucoApi = axios.create({
  baseURL: 'https://api.arcabouco.org'
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
