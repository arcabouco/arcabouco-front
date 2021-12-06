import faker from 'faker'

import { Software } from './Software'
import { TagCategory } from './TagCategory'

import { Tag as TagEntity } from '../interfaces/Tag'

export const Tag = (generateChildren = false): TagEntity => ({
  createdAt: faker.date.past(),
  id: faker.datatype.uuid(),
  name: faker.lorem.word(),
  softwares: generateChildren ? Software() : ({} as any),
  tagCategory: generateChildren ? TagCategory() : ({} as any),
  tagCategoryId: faker.datatype.uuid(),
  updatedAt: faker.date.past()
})
