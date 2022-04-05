import { arcaboucoApi } from './arcaboucoApi'
import FormData from 'form-data'
import { Software } from '../interfaces/Software'

type CreateSoftwareBody = {
  name: string
  description: string
  link: string
  images: Blob[]
}

export const createSoftware = async (
  input: CreateSoftwareBody
): Promise<{ software: Software }> => {
  const formData = new FormData()
  formData.append('name', input.name)
  formData.append('description', input.description)
  formData.append('link', input.link)
  input.images.forEach(imageBlob => formData.append('images', imageBlob))

  const { data } = await arcaboucoApi({
    method: 'POST',
    data: formData,
    url: '/softwares',
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })

  return { software: data.software }
}
