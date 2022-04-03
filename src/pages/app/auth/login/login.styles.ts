import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  width: 100vw;
  height: 100vh;
  gap: 3vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background: #fff;
`

export const Title = styled.h1`
  font: 600 6.4vw Sora, sans-serif;
  color: #0e2750;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 0 5vw;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1.4vw;
  width: 100%;
  font: 400 4.8vw Sora, sans-serif;
  color: #66696f;
`
export const Warring = styled.span`
  text-align: start;
  font: 400 3.2vw Sora, sans-serif;
  margin-top: 0.4vh;
  color: #dc1212;
  width: 100%;
  height: 4.6vh;
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
`

export const SignupButton = styled.button`
  width: 100%;
  margin: 0 5vw;
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
`

export const FootInfo = styled.span`
  text-align: center;
  font: 400 3.4vw Sora, sans-serif;
  color: #66696f;
  b {
    color: #484aad;
  }
`
