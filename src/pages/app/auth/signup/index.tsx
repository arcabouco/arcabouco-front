import {
  FootInfo,
  Form,
  Input,
  Label,
  SignupPageContainer,
  SignupButton,
  Title,
  Warring,
  FormContainer
} from './signup.styles'
import { Formik, FormikHelpers } from 'formik'
import Link from 'next/link'
import * as Yup from 'yup'
import * as Request from '../../../../api/Request'
import { useRouter } from 'next/router'
import { TopBar } from '../../../../components/TopBar/TopBar'
import { DefaultFooter } from '../../../../components/DefaultFooter/DefaultFooter'

const SignupPage = () => {
  const route = useRouter()

  type FormSchema = {
    name: string
    lastName: string
    email: string
    password: string
    rePassword: string
  }

  const formSchema = Yup.object({
    name: Yup.string().required('Obrigatório'),
    lastName: Yup.string().required('Obrigatório'),
    email: Yup.string().email('Email inválido').required('Obrigatório'),
    password: Yup.string()
      .min(8, 'Mínimo de 8 caracteres')
      .required('Obrigatório'),
    rePassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Senhas não conferem')
      .required('Obrigatório')
  })

  const handleSubmit = async (
    values: FormSchema,
    helper: FormikHelpers<FormSchema>
  ) => {
    await Request.signup({
      email: values.email,
      lastName: values.lastName,
      name: values.name,
      password: values.password
    })

    helper.resetForm()

    route.push('/app/auth/signup/email')
  }

  return (
    <SignupPageContainer>
      <TopBar />
      <FormContainer>
        <Title>Cadastro</Title>

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
          validate={async values => {
            const { isAvailable } = await Request.verifyEmail(values.email)
            return isAvailable ? {} : { email: 'Email já cadastrado' }
          }}
        >
          {({ values, handleChange, handleSubmit, errors, touched }) => (
            <Form onSubmit={handleSubmit}>
              <Label>
                Nome
                <Input
                  type={'name'}
                  name={'name'}
                  placeholder={'Digite aqui'}
                  onChange={handleChange}
                  value={values.name}
                />
              </Label>
              <Warring>{errors.name && touched.name && errors.name}</Warring>

              <Label>
                Sobrenome
                <Input
                  type={'lastName'}
                  name={'lastName'}
                  placeholder={'Digite aqui'}
                  onChange={handleChange}
                  value={values.lastName}
                />
              </Label>
              <Warring>
                {errors.lastName && touched.lastName && errors.lastName}
              </Warring>

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

              <Label>
                Confirmar senha
                <Input
                  type={'password'}
                  name={'rePassword'}
                  placeholder={'Digite aqui'}
                  onChange={handleChange}
                  value={values.rePassword}
                />
              </Label>
              <Warring>
                {errors.rePassword && touched.rePassword && errors.rePassword}
              </Warring>

              <SignupButton type="submit">Cadastrar</SignupButton>
            </Form>
          )}
        </Formik>

        <Link href={'/app/auth/login'}>
          <FootInfo>
            Já possui uma conta? <br /> <b>Faça Login!</b>
          </FootInfo>
        </Link>
      </FormContainer>

      <DefaultFooter />
    </SignupPageContainer>
  )
}

export default SignupPage
