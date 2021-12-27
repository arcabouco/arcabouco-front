import styled from 'styled-components'
import { Menu } from 'styled-icons/material-sharp'
import { Check as a } from 'styled-icons/boxicons-regular'
import Arcabouco from '../assets/arcabouco-logo.svg'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;

  overflow: hidden;

  background: white;
  z-index: -1;
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: min(2vh, 1.25rem);
  align-items: center;
  padding: 1.5rem 1.5rem 3rem;

  background-color: #2b4b65 !important;
  background: linear-gradient(
    180deg,
    #0d264f 0%,
    rgba(13, 38, 79, 0.305673) 35.7%,
    rgba(13, 38, 79, 0.168521) 45.3%,
    rgba(13, 38, 79, 0) 54.91%,
    rgba(13, 38, 79, 0) 66.31%,
    rgba(13, 38, 79, 0) 72.99%,
    rgba(13, 38, 79, 0) 93.71%
  );
  height: 65%;
  width: 100%;
  /* z-index: 1; */
`

export const MenuBUttonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  /* height: 3rem; */
  /* padding-top: 1.5rem; */
`

export const MenuButton = styled(Menu)`
  height: 100%;
  width: 1.8rem;
  color: #000;
  background: #fff;
  border-radius: 0.3rem;
`

export const ArcaboucoLogo = styled(Arcabouco)`
  height: 10vh;
  width: 10vh;
  transform: translateY(-1rem);
`

export const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font: 700 7vw Roboto, sans-serif;
`

export const Description = styled.p`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font: 400 4vw Roboto, sans-serif;
  line-height: 5vw;
`

export const MoreInfo = styled.button`
  display: flex;
  width: 100%;
  font: 700 4vw Roboto, sans-serif;
  text-align: left;
  cursor: pointer;
`

export const InfoList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  gap: 1.2rem;
  padding-top: 1rem;

  list-style-type: none;
`

export const InfoItem = styled.li`
  font: 400 0.8rem Roboto, sans-serif;
`

export const CheckIcon = styled(a)`
  width: min-content;
  height: 1rem;
  margin-right: 0.3rem;
  background: #2fc863;
  border-radius: 50%;
  color: #fff;

  path {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 45%;
  background: #f5f6fb;
`
