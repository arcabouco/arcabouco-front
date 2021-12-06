import { Tag } from './Tag'

export type TagCategory = {
  id: string

  name: string

  description: string

  isMultiTag: boolean

  tags: Tag[]

  createdAt: Date

  updatedAt: Date
}
