import {
  FootInfo,
  Form,
  FormContainer,
  Input,
  Label,
  LoginPageContainer,
  SignupButton,
  Title,
  Warring
} from './login.styles'
import { Formik, FormikHelpers } from 'formik'
import Link from 'next/link'
import * as Yup from 'yup'
import * as Request from '../../../../api/Request'
import router, { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { toast } from 'react-toastify'
import { TopBar } from '../../../../components/TopBar/TopBar'
import { AuthContext } from '../../../../Context/Auth'
import { NavBar } from '../../../../components/NavBar/NavBar'
import { DefaultFooter } from '../../../../components/DefaultFooter/DefaultFooter'

const SignupPage = () => {
  const route = useRouter()
  const { setToken, user } = useContext(AuthContext)

  useEffect(() => {
    if (user) route.push('/')
  }, [user])

  const formSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Obrigatório'),
    password: Yup.string()
      .min(8, 'Mínimo de 8 caracteres')
      .required('Obrigatório')
  })

  type FormSchema = Yup.InferType<typeof formSchema>

  const handleSubmit = async (
    values: FormSchema,
    helper: FormikHelpers<FormSchema>
  ) => {
    helper.setFieldValue('password', '')

    const loginPromise = Request.login({
      email: values.email,
      password: values.password
    })

    const { jwtToken } = await toast.promise(loginPromise, {
      error: 'Usuário ou senha incorretos',
      pending: 'Verificando login e senha...',
      success: 'Login efetuado com sucesso'
    })

    await setToken(jwtToken)

    router.push((router.query.redirect as string) || '/')
  }

  return (
    <LoginPageContainer>
      <TopBar></TopBar>
      {/* <NavBar></NavBar> */}

      <FormContainer>
        <Title>Entrar</Title>

        <Formik
          initialValues={
            {
              name: '',
              lastName: '',
              email: '',
              password: '',
              rePassword: ''
            } as FormSchema
          }
          onSubmit={handleSubmit}
          validationSchema={formSchema}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <Label>
                E-mail
                <Input
                  type={'email'}
                  name={'email'}
                  placeholder={'Digite aqui'}
                  onChange={handleChange}
                  value={values.email}
                />
              </Label>
              <Warring>{errors.email && touched.email && errors.email}</Warring>

              <Label>
                Senha
                <Input
                  type={'password'}
                  name={'password'}
                  placeholder={'Digite aqui'}
                  onChange={handleChange}
                  value={values.password}
                />
              </Label>
              <Warring>
                {errors.password && touched.password && errors.password}
              </Warring>

              <SignupButton type="submit">Entrar</SignupButton>
            </Form>
          )}
        </Formik>

        <Link href={'/'}>
          <FootInfo>
            Esqueceu sua senha? <br /> <b>Recuperar senha!</b>
          </FootInfo>
        </Link>
      </FormContainer>

      <DefaultFooter />
    </LoginPageContainer>
  )
}

export default SignupPage
