import {
  EmailIcon,
  EmailInfo,
  Main,
  SignupEmailPageContainer,
  Title
} from './email.styles'

const SignupEmailPage = () => (
  <SignupEmailPageContainer>
    <Main>
      <EmailIcon />
      <Title>Verifique seu email</Title>
      <EmailInfo>
        Te enviamos um email para confirmar seu cadastro. Por favor, verifique
        sua caixa de entrada e caixa de span.
      </EmailInfo>
    </Main>
  </SignupEmailPageContainer>
)

export default SignupEmailPage
