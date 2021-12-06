import { NextPage } from 'next'
import Link from 'next/link'
import arcaboucoLogo from '../assets/arcaboucoLogo.png'

import {
  Header,
  HomeContainer,
  LogoContainer,
  Main,
  StartButton,
  MenuIcon,
  CloseIcon,
  Footer,
  DesktopAboutContainer,
  AboutContainer
} from './home.styles'

import Image from 'next/image'
import { useState } from 'react'
import { SideNav } from '../components/SideNav/SideNav'
import { NavBar } from '../components/NavBar/NavBar'

const Home: NextPage = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const switchMenuHandler = () => {
    setMenuOpened(!menuOpened)
  }

  const AboutText = () => (
    <>
      <b>Arcabouço</b> consectetur adipiscing elit, sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua. Nunc mi ipsum faucibus vitae.{' '}
    </>
  )

  return (
    <HomeContainer>
      <SideNav opened={menuOpened} />
      <NavBar className={'desktopOnly'} />

      <Header>
        <button className={'mobileOnly'} onClick={switchMenuHandler}>
          {menuOpened ? <CloseIcon /> : <MenuIcon />}
        </button>
      </Header>

      <Main>
        <DesktopAboutContainer>
          <AboutText />
        </DesktopAboutContainer>

        <LogoContainer>
          <Image src={arcaboucoLogo} />
        </LogoContainer>

        <AboutContainer>
          <AboutText />
        </AboutContainer>

        <Link href={'/app'}>
          <StartButton type="button">Começar</StartButton>
        </Link>
      </Main>

      <Footer />
    </HomeContainer>
  )
}

export default Home
