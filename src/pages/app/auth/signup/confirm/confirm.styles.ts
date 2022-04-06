import styled from 'styled-components'
import { CheckCircle } from 'styled-icons/material'
import { HashLoader } from 'react-spinners'
import { media } from '../../../../../utils/css'

export const SignupConfirmPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  margin-top: 30%;
  background: #f5f6fb;

  ${media.desktop} {
    height: unset;
    margin-top: 10rem;
  }
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: min(8vw, 3rem);
  padding: 0 2%;

  ${media.desktop} {
    width: 30rem;
    height: 40rem;
    background: #fff;
    transform: translateY(8%);
  }
`

export const EmailIcon = styled(CheckCircle)`
  width: 20%;
  color: #484aad;
`

export const Title = styled.h1`
  font: 600 160% Sora, sans-serif;
`

export const EmailInfo = styled.span`
  text-align: center;
  color: #66696f;

  ${media.desktop} {
    font: 400 1.2rem Roboto, sans-serif;
  }
`

export const FooterInfo = styled.span``
