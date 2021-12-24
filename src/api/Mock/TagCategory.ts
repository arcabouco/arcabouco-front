import faker from 'faker'
import { Tag } from './Tag'

import { TagCategory as TagCategoryEntity } from '../interfaces/TagCategory'
import { randomArrayOf } from './randomArrayOf'

export const TagCategory = (generateChildren = false): TagCategoryEntity => ({
  createdAt: faker.date.past(),
  description: faker.lorem.sentence(),
  id: faker.datatype.uuid(),
  isMultiTag: faker.datatype.boolean(),
  name: faker.lorem.word(),
  tags: generateChildren ? randomArrayOf(Tag, 5, 15) : [],
  updatedAt: faker.date.recent()
})
