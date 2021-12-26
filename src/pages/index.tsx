import { NextPage } from 'next'

import { HomeContainer } from './home.styles'

import { useState } from 'react'
import { HomeCards } from '../components/HomeCards/HomeCards'

const Home: NextPage = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const switchMenuHandler = () => {
    setMenuOpened(!menuOpened)
  }

  return <HomeContainer>
    <HomeCards />

  </HomeContainer>
}

export default Home
