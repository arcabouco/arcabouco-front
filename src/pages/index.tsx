import { NextPage } from 'next'

import {
  ArcaboucoLogo,
  CardsContainer,
  CheckIcon,
  Description,
  HomeContainer,
  InfoItem,
  InfoList,
  MainContainer,
  MenuBUttonContainer,
  MoreInfo,
  Title
} from './home.styles'

import { useState } from 'react'

import { HomeCards } from '../components/HomeCards/HomeCards'
import { MenuButton } from '../components/MenuButton/MenuButton.styles'
import { useSideNav } from '../components/SideNav/SideNav'

const Home: NextPage = () => {
  const { SideNav, switchMenuOpened } = useSideNav()

  return (
    <HomeContainer>
      <SideNav></SideNav>
      <MainContainer>
        <MenuBUttonContainer>
          <MenuButton onClick={switchMenuOpened} />
        </MenuBUttonContainer>

        <ArcaboucoLogo />

        <Title>Seja bem-vindo</Title>

        <Description>
          Loren i consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Description>

        <MoreInfo>Saiba mais &gt;</MoreInfo>

        <InfoList>
          <InfoItem>
            <CheckIcon />
            Mais de quinhentos softwares de educação
          </InfoItem>

          <InfoItem>
            <CheckIcon /> +Três mil atividades com loren ipsum
          </InfoItem>

          <InfoItem>
            <CheckIcon /> 100% gratuito
          </InfoItem>
        </InfoList>
      </MainContainer>

      <CardsContainer>
        <HomeCards />
      </CardsContainer>
    </HomeContainer>
  )
}

export default Home
