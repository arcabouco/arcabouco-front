import axios from 'axios'

export const arcaboucoApi = axios.create({
  baseURL:
    process.env.ENV === 'prod'
      ? 'https://api.arcabouco.org'
      : 'http://localhost:3040'
})

arcaboucoApi.interceptors.request.use(config => {
  const jwtToken = localStorage.getItem('jwt-token')
  if (jwtToken)
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${jwtToken}`
    }

  console.log('interceptin', { jwtToken })

  return config
})
