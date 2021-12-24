import { NextPage } from 'next'

import { HomeContainer } from './home.styles'

import { useState } from 'react'

const Home: NextPage = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const switchMenuHandler = () => {
    setMenuOpened(!menuOpened)
  }

  return <HomeContainer></HomeContainer>
}

export default Home
