import Link from 'next/link'
import * as Mock from '../../../../api/Mock'
import { useRouter } from 'next/router'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { Software } from '../../../../api/interfaces/Software'
import { TagCategory } from '../../../../api/interfaces/TagCategory'
import {
  AddImageIcon,
  AddImageInput,
  AddImageLabel,
  Arrow,
  BasicInformationForm,
  DescriptionInput,
  FootInfo,
  Gallery,
  GalleryContainer,
  GalleryLabel,
  Header,
  Image,
  ImageContainer,
  InputLabel,
  LinkInput,
  Main,
  PageTitle,
  RemoveImageIcon,
  SoftwarePageContainer,
  SubmitButton,
  TitleInput,
  Warring
} from './suggest.styles'

import * as Yup from 'yup'

import { Request } from '../../../../api'
import { toast } from 'react-toastify'
import { Formik, FormikHelpers } from 'formik'
import { DefaultFooter } from '../../../../components/DefaultFooter/DefaultFooter'

const SuggestSoftwareFormSchema = Yup.object({
  name: Yup.string().required('Título é obrigatório'),
  description: Yup.string().required('Descrição é obrigatória'),
  link: Yup.string().url('Link inválido').required('Link é obrigatório')
})

type SuggestSoftwareForm = Yup.InferType<typeof SuggestSoftwareFormSchema>

const SoftwarePage = () => {
  const router = useRouter()
  const [images, setImages] = useState([] as { localUrl: string; data: Blob }[])
  const [inputKey, setInputKey] = useState(new Date().getTime())

  const handleImageAdd: ChangeEventHandler<HTMLInputElement> = async event => {
    const { files } = event.target

    if (!files) return

    const newImagesPromises = Array.from(files).map(async file => ({
      localUrl: await URL.createObjectURL(file),
      data: file
    }))

    const newImages = await toast.promise(
      Promise.all(newImagesPromises),
      {
        pending: 'Carregando imagens',
        success: 'Imagens carregadas com sucesso',
        error: 'Erro ao carregar imagens'
      },
      {
        autoClose: 1000
      }
    )

    setImages(images => [...images, ...newImages])

    setInputKey(new Date().getTime())
  }

  const handleRemoveImage = (index: number) => {
    images.splice(index, 1)
    setImages([...images])
  }

  const handleSubmit = async (
    values: SuggestSoftwareForm,
    helpers: FormikHelpers<SuggestSoftwareForm>
  ) => {
    const imageBlobs = images.map(image => image.data)

    const creation = Request.createSoftware({
      description: values.description,
      name: values.name,
      link: values.link,
      images: imageBlobs
    })

    const software = await toast.promise(creation, {
      pending: 'Enviando sugestão',
      success: 'Sugestão enviada com sucesso',
      error: 'Erro ao enviar sugestão'
    })

    router.push('/')
  }

  return (
    <SoftwarePageContainer>
      <Header>
        <Arrow onClick={router.back} />
      </Header>

      <Main>
        <PageTitle>Sugerir software</PageTitle>

        <Formik
          validationSchema={SuggestSoftwareFormSchema}
          initialValues={{
            name: '',
            description: '',
            link: ''
          }}
          onSubmit={handleSubmit}
        >
          {({ values, errors, handleChange, handleSubmit, touched }) => (
            <BasicInformationForm onSubmit={handleSubmit}>
              <InputLabel>
                Nome
                <TitleInput
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  placeholder="Nome do software"
                />
                <Warring>{errors.name && touched.name && errors.name}</Warring>
              </InputLabel>

              <InputLabel>
                Descrição
                <DescriptionInput
                  // contentEditable
                  name="description"
                  onChange={handleChange}
                  value={values.description}
                  placeholder="Descrição e dicas de uso"
                />
                <Warring>
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </Warring>
              </InputLabel>

              <InputLabel>
                Link de acesso
                <LinkInput
                  contentEditable
                  name="link"
                  onChange={handleChange}
                  value={values.link}
                  placeholder="Site para acessar o software"
                />
                <Warring>{errors.link && touched.link && errors.link}</Warring>
              </InputLabel>

              <GalleryContainer>
                <GalleryLabel>Imagens</GalleryLabel>
                <Gallery>
                  {images.map((image, index) => (
                    <ImageContainer key={image.localUrl}>
                      <RemoveImageIcon
                        onClick={() => handleRemoveImage(index)}
                      />
                      <Image src={image.localUrl}></Image>
                    </ImageContainer>
                  ))}

                  <AddImageLabel>
                    <AddImageInput
                      type="file"
                      multiple
                      accept="image/*"
                      key={inputKey}
                      onChange={handleImageAdd}
                    />
                    <AddImageIcon />
                  </AddImageLabel>
                </Gallery>
              </GalleryContainer>

              <FootInfo>
                Após o envio será possível adicionar <b>tags</b> além de editar
                as informações atuais
              </FootInfo>

              <SubmitButton type="submit">Enviar sugestão</SubmitButton>
            </BasicInformationForm>
          )}
        </Formik>
      </Main>

      <DefaultFooter />
    </SoftwarePageContainer>
  )
}
export default SoftwarePage
