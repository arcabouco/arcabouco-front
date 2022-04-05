import {
  ArcaboucoLogo,
  CardsContainer,
  CheckIcon,
  Description,
  HomeContainer,
  InfoItem,
  InfoItemLabel,
  InfoList,
  MainContainer,
  MenuBUttonContainer,
  MoreInfo,
  Title
} from './home.mobile.styles'

import { HomeCards } from '../../components/HomeCards/HomeCards'
import { MenuButton } from '../../components/MenuButton/MenuButton.styles'
import { useSideNav } from '../../components/SideNav/SideNav'

export const HomeMobilePage = () => {
  const { SideNav, switchMenuOpened } = useSideNav()

  return (
    <HomeContainer>
      <SideNav></SideNav>
      <MainContainer>
        <MenuBUttonContainer>
          <MenuButton onClick={switchMenuOpened} />
        </MenuBUttonContainer>

        <ArcaboucoLogo />

        <Title>Arcabouço</Title>

        <Description>
          Encontre softwares e atividades para suas aulas. Crie uma conta e
          contribua adicionando mais softwares e atividades
        </Description>

        {/* <MoreInfo>Saiba mais &gt;</MoreInfo> */}

        <InfoList>
          <InfoItem>
            <CheckIcon />
            <InfoItemLabel>
              Fomentamos tecnologias Digitais no ensino aliadas a metodologias
              ativas
            </InfoItemLabel>
          </InfoItem>

          <InfoItem>
            <CheckIcon />
            <InfoItemLabel>
              É possível mandar sugestões de novos softwares e atividades
            </InfoItemLabel>
          </InfoItem>

          <InfoItem>
            <CheckIcon />
            <InfoItemLabel>
              Gratuito, sem fins lucrativos e opensource
            </InfoItemLabel>
          </InfoItem>
        </InfoList>
      </MainContainer>

      <CardsContainer>
        <HomeCards />
      </CardsContainer>
    </HomeContainer>
  )
}
