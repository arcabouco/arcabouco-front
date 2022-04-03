import { Software } from '../interfaces/Software'
import { TagCategory } from '../interfaces/TagCategory'
import { arcaboucoApi } from './arcaboucoApi'

export const listSoftwares = async (
  filter?: TagCategory[]
): Promise<Software[]> => {
  const { data } = await arcaboucoApi({
    method: 'GET',
    data: filter,
    url: '/softwares'
  })

  return data.softwares
}
