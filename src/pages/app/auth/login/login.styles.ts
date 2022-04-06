import styled from 'styled-components'
import { media } from '../../../../utils/css'

export const LoginPageContainer = styled.div`
  gap: 4vh;

  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #f5f6fb;

  ${media.desktop} {
    justify-content: end;
    gap: 0;
  }
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 5vw;

  ${media.desktop} {
    width: 25vw;
    min-width: 30rem;
    background: #fff;
    padding: 2%;
    transform: translateY(10%);
    height: 120%;
  }
`

export const Title = styled.h1`
  font: 600 6.4vw Sora, sans-serif;
  color: #0e2750;

  ${media.desktop} {
    font-size: 200%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 5vw;

  ${media.desktop} {
    width: 100%;
    padding: 0;
  }
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1.4vw;
  width: 100%;
  font: 400 4.8vw Sora, sans-serif;
  color: #66696f;

  ${media.desktop} {
    font-size: 140%;
    gap: 0.8rem;
  }
`
export const Warring = styled.span`
  text-align: start;
  font: 400 3.2vw Sora, sans-serif;
  margin-top: 0.4vh;
  color: #dc1212;
  width: 100%;
  height: 4.6vh;

  ${media.desktop} {
    font-size: 100%;
  }
`

export const Input = styled.input`
  width: 100%;
  font: 400 4.4vw Sora, sans-serif;
  padding: 1.4vw 0 1.4vw 5vw;
  border: solid 1px #dddcdf;
  border-radius: 2vw;

  ::placeholder {
    font: 400 4.4vw Sora, sans-serif;
    color: #dcdcdc;
  }

  ${media.desktop} {
    font-size: 80%;
    padding: 2% 0 2% 4%;
    border-radius: 0.4rem;

    ::placeholder {
      font-size: 80%;
    }
  }
`

export const SignupButton = styled.button`
  width: 100%;
  margin-bottom: 5vw;
  font: 400 4vw Sora, sans-serif;
  color: #dcdcdc;
  background: #484aad;
  padding: 3vw 0;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 0.3s linear;

  :active {
    background: #0e2750;
  }

  ${media.desktop} {
    font-size: 150%;
    padding: 3% 0;
    margin-bottom: 8%;
  }
`

export const FootInfo = styled.span`
  text-align: center;
  font: 400 3.4vw Sora, sans-serif;
  color: #66696f;
  b {
    color: #484aad;
  }
  ${media.desktop} {
    font-size: 100%;
  }
`
