import { Software as SoftwareEntity } from '../interfaces/Software'
import { Tag } from './Tag'
import faker from 'faker'
import { randomArrayOf } from './randomArrayOf'

export const Software = (generateChildren = false): SoftwareEntity => ({
  createdAt: faker.date.past(),
  description: faker.lorem.paragraph(),
  id: faker.datatype.uuid(),
  link: faker.internet.url(),
  name: faker.lorem.word(),
  tags: generateChildren ? randomArrayOf(Tag) : [],
  updatedAt: faker.date.recent()
})
