import { useEffect, useState } from 'react'
import { User } from '../api/interfaces/User'
import * as Request from '../api/Request'

export const useUser = () => {
  const [user, setUser] = useState<null | User>(null)

  useEffect(() => {
    Request.getUser()
      .then(setUser)
      .catch(() => setUser(null))
  }, [])

  const setJwtToken = (jwtToken: string) => {
    localStorage.setItem('jwt-token', jwtToken)

    Request.getUser()
      .then(setUser)
      .catch(() => setUser(null))
  }

  const logout = () => {
    localStorage.removeItem('jwt-token')
    setUser(null)
  }

  return { user, setJwtToken, logout }
}
