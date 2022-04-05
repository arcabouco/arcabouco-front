import { useEffect, useState } from 'react'
import { HomeDesktopPage } from '../responsiblePage/desktop/home.desktop'
import { HomeMobilePage } from '../responsiblePage/mobile/home.mobile'

const Home = () => {
  const [screenWidth, setScreenWidth] = useState(0)

  useEffect(() => {
    setScreenWidth(window.innerWidth)

    window.addEventListener('resize', () => {
      setScreenWidth(window.innerWidth)
    })

    return () => {
      window.removeEventListener('resize', () => {
        setScreenWidth(window.innerWidth)
      })
    }
  }, [])

  return <>{screenWidth > 1000 ? <HomeDesktopPage /> : <HomeMobilePage />}</>
}

export default Home
