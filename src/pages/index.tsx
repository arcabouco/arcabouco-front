import { useContext, useEffect, useState } from 'react'
import { ScreenContext } from '../Context/Scheen'
import { HomeDesktopPage } from '../responsiblePage/desktop/home.desktop'
import { HomeMobilePage } from '../responsiblePage/mobile/home.mobile'

const Home = () => {
  const { width } = useContext(ScreenContext)

  return <>{width > 1000 ? <HomeDesktopPage /> : <HomeMobilePage />}</>
}

export default Home
