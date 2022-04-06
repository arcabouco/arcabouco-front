import { TagCategory } from '../interfaces/TagCategory'
import { arcaboucoApi } from './arcaboucoApi'

export const listSoftwareCategories = async (): Promise<{
  softwareCategories: TagCategory[]
}> => {
  const { data } = await arcaboucoApi({
    method: 'GET',
    url: '/categories'
  })

  return { softwareCategories: data.tagCategories }
}
