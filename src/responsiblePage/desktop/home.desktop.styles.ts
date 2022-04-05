import styled from 'styled-components'
import { Check } from 'styled-icons/material-outlined'
import Arcabouco from '../../assets/arcabouco-logo.svg'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 100vw; */
  /* min-height: 100vh; */
  background: #fff;
  /* overflow-y: scroll; */
`
export const Main = styled.main`
  background-color: #2b4b65 !important;

  background: linear-gradient(
    180deg,
    #0d264f 0%,
    rgba(13, 38, 79, 0.96341) 18.07%,
    rgba(13, 38, 79, 0.92662) 20.66%,
    rgba(13, 38, 79, 0.821304) 24.22%,
    rgba(13, 38, 79, 0.741172) 27.4%,
    rgba(13, 38, 79, 0.684836) 31.58%,
    rgba(13, 38, 79, 0.652651) 33.68%,
    rgba(13, 38, 79, 0.614671) 36.35%,
    rgba(13, 38, 79, 0.592242) 36.51%,
    rgba(13, 38, 79, 0.482449) 45.03%,
    rgba(13, 38, 79, 0.305673) 64.65%,
    rgba(13, 38, 79, 0.168521) 89.1%,
    rgba(13, 38, 79, 0.108022) 97.98%,
    rgba(13, 38, 79, 0) 99.52%,
    rgba(13, 38, 79, 0) 100%,
    rgba(13, 38, 79, 0) 100%,
    rgba(13, 38, 79, 0.0137324) 100%,
    rgba(13, 38, 79, 0) 100%
  );

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70vh;
  padding: 2vw 5vw;
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 20vw;
`

export const ArcaboucoLogo = styled(Arcabouco)`
  width: 12vh;
  height: 12vh;
  margin-bottom: 2vh;
`

export const About = styled.p`
  font: 400 3vh Sora, sans-serif;
  color: #fff;
`

export const AboutTiny = styled.p`
  font: 300 2vh Sora, sans-serif;
  color: #fff;
`

export const CardsContainer = styled.div``

export const MoreInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15rem;
`

export const MoreInfoTitle = styled.h2`
  font: 700 3vh Roboto, sans-serif;
  margin: 15vh 0 4vh 0;
`

export const StepsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60vw;
  margin-bottom: 5vh;
`

export const StepLine = styled.div`
  position: absolute;
  width: 100%;
  height: 2px;
  background: #cdd3e2;
  transform: translateY(50%);
`

export const StepIconsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const StepIcon = styled(Check)`
  width: 1.8vw;
  height: 1.8vw;
  background: #2fc863;
  color: #fff;

  /* border: 2vw solid #2fc863; */
  border-radius: 50%;
  z-index: 2;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 76vw;
`

export const Description = styled.p`
  max-width: 18vw;
  text-align: center;
`
