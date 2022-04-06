import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  EmailIcon,
  EmailInfo,
  Main,
  SignupConfirmPageContainer,
  Title
} from './confirm.styles'
import * as Request from '../../../../../api/Request'
import { HashLoader } from 'react-spinners'
import { DefaultFooter } from '../../../../../components/DefaultFooter/DefaultFooter'
import { toast } from 'react-toastify'

const SignupConfirmPage = () => {
  const router = useRouter()
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [counter, setCounter] = useState(5)

  useEffect(() => {
    if (!router.query.id) return
    if (!router.query.token) return

    const confirmation = Request.confirmSignup({
      token: router.query.token as string,
      userId: router.query.id as string
    }).then(() => setIsConfirmed(true))

    toast.promise(confirmation, {
      error: 'Erro ao confirmar o cadastro'
    })
  }, [router.query.id, router.query.token])

  useEffect(() => {
    if (!isConfirmed) return
    const interval = setInterval(
      () => setCounter(counter => Math.max(0, counter - 1)),
      1000
    )
    return () => clearInterval(interval)
  }, [isConfirmed])

  useEffect(() => {
    if (counter === 0) router.push('/app/auth/login')
  }, [counter])

  return (
    <SignupConfirmPageContainer>
      <Main>
        {isConfirmed ? (
          <>
            <EmailIcon />
            <Title>Cadastro finalizado</Title>
            <EmailInfo>
              Obrigado por se cadastrar no Arcabouço. Você irá para a tela de
              Login em {counter} segundos
            </EmailInfo>
          </>
        ) : (
          <HashLoader color="#484aad" />
        )}
      </Main>

      <DefaultFooter />
    </SignupConfirmPageContainer>
  )
}

export default SignupConfirmPage
