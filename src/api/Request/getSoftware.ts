import { Software } from '../interfaces/Software'
import { TagCategory } from '../interfaces/TagCategory'
import { arcaboucoApi } from './arcaboucoApi'

export const getSoftware = async (
  id: string
): Promise<{ software: Software; categories: TagCategory[] }> => {
  const { data } = await arcaboucoApi({
    method: 'GET',
    url: `/softwares/${id}`
  })

  return { software: data.software, categories: data.categories }
}
