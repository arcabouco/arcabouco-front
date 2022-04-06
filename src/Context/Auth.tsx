import { createContext, useEffect, useState } from 'react'
import { User } from '../api/interfaces/User'
import { setCookie } from 'nookies'
import * as Request from '../api/Request'

export type AuthContext = {
  user: User | null
  setToken: (token: string) => Promise<void>
  logout: () => void
}

export const AuthContext = createContext({} as AuthContext)

export const AuthProvider = (props: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    Request.getUser()
      .then(setUser)
      .catch(() => {})
  }, [])

  const setToken = async (token: string) => {
    setCookie(null, 'arcabouco-token', token, {
      maxAge: 60 * 60 * 24 // 1 day
    })

    Request.getUser()
      .then(setUser)
      .catch(() => {})
  }

  const logout = () => {
    setUser(null)
    setCookie(null, 'arcabouco-token', '')
  }

  return (
    <AuthContext.Provider value={{ setToken, user, logout }}>
      {props.children}
    </AuthContext.Provider>
  )
}
