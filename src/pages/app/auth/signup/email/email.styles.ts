import styled from 'styled-components'
import { MarkEmailRead } from 'styled-icons/material'

export const SignupEmailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 30%;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: min(8vw, 3rem);
  padding: 0 2%;
`

export const EmailIcon = styled(MarkEmailRead)`
  width: 20%;
  color: #484aad;
`

export const Title = styled.h1`
  font: 600 160% Sora, sans-serif;
`

export const EmailInfo = styled.span`
  text-align: center;
  color: #66696f;
`

export const FooterInfo = styled.span``
