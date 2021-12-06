import styled from 'styled-components'
import { BREAKPOINT_MD } from '../utils/breakPoint'
import { CloseOutline } from 'styled-icons/evaicons-outline'
import { Menu } from 'styled-icons/boxicons-regular'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;

  .mobileOnly {
    display: inherit;
    @media (min-width: ${BREAKPOINT_MD}) {
      display: none;
    }
  }

  .desktopOnly {
    display: none;
    @media (min-width: ${BREAKPOINT_MD}) {
      display: inherit;
    }
  }
`

export const Header = styled.header`
  display: flex;
  width: 100%;
  max-width: 30rem;
  height: 2.5rem;
  min-height: 2rem;
  justify-content: flex-end;

  margin-top: 1.6rem;
  padding: 0 2rem;
`

export const MenuIcon = styled(Menu)`
  height: 100%;
`

export const CloseIcon = styled(CloseOutline)`
  height: 100%;
`

export const Main = styled.main`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 7%;
  max-width: 300px;
  margin: 0 2rem;
  padding-top: 12vh;

  @media (min-width: ${BREAKPOINT_MD}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1;
    column-gap: 15rem;
    row-gap: 3rem;

    margin: 0 max(1vw, 12rem);
    padding-top: 0;
    max-width: 100%;
  }
`
export const AboutContainer = styled.p`
  width: 100%;
  text-align: center;
  line-height: calc(clamp(0.5rem, 5vw, 1.5rem) * 1.3);
  font-size: clamp(0.5rem, 5vw, 1.5rem);

  @media (min-width: ${BREAKPOINT_MD}) {
    display: none;
  }
`

export const DesktopAboutContainer = styled.p`
  display: none;
  @media (min-width: ${BREAKPOINT_MD}) {
    display: block;
    grid-column: 1;
    grid-row: 1/3;
    font-size: 1.5rem;
    line-height: 1.4;
  }
`

export const LogoContainer = styled.div`
  width: 80%;
  align-items: center;

  @media (min-width: ${BREAKPOINT_MD}) {
    grid-column: 2;
    grid-row: 1;
    align-self: flex-end;
    justify-self: center;
    width: 20rem;
  }
`

export const StartButton = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 11px;
  background-color: ${props => props.theme.colors.text};
  font: 700 1.8rem Roboto;
  color: #202020;

  cursor: pointer;

  @media (min-width: ${BREAKPOINT_MD}) {
    grid-column: 2;
    grid-row: 2;
    align-self: baseline;
    justify-self: center;
    width: 20rem;
  }
`
export const Footer = styled.footer`
  display: flex;
  width: 100%;
  min-height: 3rem;
`
