import {
  FootInfo,
  Form,
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
import { useUser } from '../../../../Hook'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { TopBar } from '../../../../components/TopBar/TopBar'

const SignupPage = () => {
  const route = useRouter()
  const { setJwtToken, user } = useUser()

  useEffect(() => {
    if (user) route.push('/')
  }, [user])

  type FormSchema = {
    email: string
    password: string
  }

  const formSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Obrigatório'),
    password: Yup.string()
      .min(8, 'Mínimo de 8 caracteres')
      .required('Obrigatório')
  })

  const handleSubmit = async (
    values: FormSchema,
    helper: FormikHelpers<FormSchema>
  ) => {
    const response = await Request.login({
      email: values.email,
      password: values.password
    }).catch(() => null)

    if (response) {
      setJwtToken(response.jwtToken)
      helper.resetForm()
      router.push((router.query.redirect as string) || '/')
      toast.success(`${response.user.name}, login feito com sucesso`, {
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
    } else {
      toast.error('Usuário ou senha inválidos', {
        position: 'top-left',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      })
      helper.setFieldValue('password', '')
      helper.setFieldError('password', 'Usuário ou senha inválidos')
    }
  }

  return (
    <LoginPageContainer>
      <TopBar></TopBar>

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
    </LoginPageContainer>
  )
}

export default SignupPage
