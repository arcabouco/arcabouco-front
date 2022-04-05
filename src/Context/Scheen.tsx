import { createContext, ReactNode, useEffect, useState } from 'react'

type ScreenContext = {
  width: number
  isMobile: boolean
}

export const ScreenContext = createContext({} as ScreenContext)

export const ScreenProvider = (input: { children: ReactNode }) => {
  const [width, setWidth] = useState(0)
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    setIsMobile(width < 1000)
  }, [width])

  useEffect(() => {
    setWidth(window.innerWidth)

    window.addEventListener('resize', () => {
      setWidth(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setWidth(window.innerWidth)
      })
    }
  }, [])

  return (
    <ScreenContext.Provider value={{ width, isMobile }}>
      {input.children}
    </ScreenContext.Provider>
  )
}
