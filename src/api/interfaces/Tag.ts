import { Software } from './Software'
import { TagCategory } from './TagCategory'

export type Tag = {
  id: string

  name: string

  softwares: Software[]

  tagCategoryId: string

  tagCategory: TagCategory

  createdAt: Date

  updatedAt: Date
}
