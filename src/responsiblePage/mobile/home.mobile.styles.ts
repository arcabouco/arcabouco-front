import styled from 'styled-components'
import { Check } from 'styled-icons/boxicons-regular'
import Arcabouco from '../../assets/arcabouco-logo.svg'

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
  gap: min(3vw, 1.5vh);
  align-items: center;
  padding: 1.5rem 1.5rem 2rem;

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
  color: #e1e1e6;
`

export const MenuBUttonContainer = styled.div`
  width: 8vw;
  max-width: 30px;
  margin-right: auto;
`

export const ArcaboucoLogo = styled(Arcabouco)`
  height: min(15vw);
  width: min(15vw);
  transform: translateY(-1rem);
`

export const Title = styled.h1`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  font: 700 6vw Roboto, sans-serif;
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
  font: 700 1rem Roboto, sans-serif;
  text-align: left;
  cursor: pointer;
`

export const InfoList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  gap: 0.8rem;
  padding-top: 1rem;

  list-style-type: none;
`

export const InfoItem = styled.div`
  display: flex;
`

export const InfoItemLabel = styled.div`
  font: 400 2vh Roboto, sans-serif;
`

export const CheckIcon = styled(Check)`
  width: 2vh !important;
  height: 2vh !important;

  min-width: 2vh !important;
  min-height: 2vh !important;

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
