import { DefaultFooter } from '../../components/DefaultFooter/DefaultFooter'
import { HomeCards } from '../../components/HomeCards/HomeCards'
import { NavBar } from '../../components/NavBar/NavBar'
import {
  About,
  AboutContainer,
  AboutTiny,
  ArcaboucoLogo,
  CardsContainer,
  Description,
  DescriptionContainer,
  Main,
  MoreInfoContainer,
  MoreInfoTitle,
  PageContainer,
  StepIcon,
  StepIconsContainer,
  StepLine,
  StepsContainer
} from './home.desktop.styles'

export const HomeDesktopPage = () => {
  return (
    <PageContainer>
      <NavBar />

      <Main>
        <AboutContainer>
          <ArcaboucoLogo />
          <About>Encontre softwares e atividades para suas aulas.</About>
          <AboutTiny>
            Crie uma conta e contribua adicionando mais softwares e atividades
          </AboutTiny>
        </AboutContainer>

        <CardsContainer>
          <HomeCards />
        </CardsContainer>
      </Main>

      <MoreInfoContainer>
        <MoreInfoTitle>Um pouco sobre o projeto</MoreInfoTitle>
        <StepsContainer>
          <StepLine />
          <StepIconsContainer>
            <StepIcon />
            <StepIcon />
            <StepIcon />
          </StepIconsContainer>
        </StepsContainer>
        <DescriptionContainer>
          <Description>
            Estimulamos o uso de Tecnologias Digitais no ensino aliado a
            metodologias ativas
          </Description>
          <Description>
            Ambiente colaborativo onde professores e pesquisadores podem fazer
            sugestões de novos softwares e atividades no catálogo
          </Description>
          <Description>
            O Arcabouço é e sempre será gratuito, sem fins lucrativos e
            opensource
          </Description>
        </DescriptionContainer>
      </MoreInfoContainer>

      <DefaultFooter />
    </PageContainer>
  )
}
