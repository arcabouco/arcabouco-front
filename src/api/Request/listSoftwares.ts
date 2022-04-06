import { Software } from '../interfaces/Software'
import { TagCategory } from '../interfaces/TagCategory'
import { arcaboucoApi } from './arcaboucoApi'
import queryString from 'query-string'

export const listSoftwares = async (
  tagCategories: TagCategory[] = []
): Promise<Software[]> => {
  const tagIds = tagCategories
    .flatMap(tagCategory => tagCategory.tags)
    .map(tag => tag.id)

  const params = queryString.stringify({
    tags: tagIds
  })
  const { data } = await arcaboucoApi({
    method: 'GET',
    url: `/softwares?${params}`
  })

  return data.softwares
}
