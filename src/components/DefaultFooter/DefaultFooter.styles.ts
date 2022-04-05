import styled from 'styled-components'
import { Github, Instagram } from 'styled-icons/bootstrap'
import { Figma } from 'styled-icons/boxicons-logos'
import { Drive } from 'styled-icons/entypo'
import { media } from '../../utils/css'

export const FooterContainer = styled.div`
  background: linear-gradient(
    180deg,
    #0d264f 0%,
    rgba(13, 38, 79, 0.305673) 35.7%,
    rgba(13, 38, 79, 0.168521) 45.3%,
    rgba(13, 38, 79, 0) 66.03%,
    rgba(13, 38, 79, 0) 72.8%,
    rgba(13, 38, 79, 0) 77.62%,
    rgba(13, 38, 79, 0) 78.89%,
    rgba(13, 38, 79, 0) 100%
  );
  background-color: #2b4b65 !important;

  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20vh;
  width: 100%;
  padding: 12vw 25vw 8vw;
  gap: 5rem;

  ${media.desktop} {
    display: flex;
  }
`

export const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Icons = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  gap: 1rem;
`

export const GithubIcon = styled(Github)`
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`
export const FigmaIcon = styled(Figma)`
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`

export const DriveIcon = styled(Drive)`
  color: #fff;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`

export const Title = styled.span`
  font: 400 1.4vw Nazegul, sans-serif;
  color: white;
`

export const MoreInfo = styled.div`
  display: flex;
  gap: 0.5rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`

export const Text = styled.span`
  font: 300 0.9rem Sora, sans-serif;
  color: #fff;
  text-align: right;
  line-height: 1rem;

  br {
    height: 1rem;
  }
`
