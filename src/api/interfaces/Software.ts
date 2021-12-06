import { Tag } from './Tag'

export type Software = {
  id: string

  name: string

  description: string

  link: string

  tags: Tag[]

  createdAt: Date

  updatedAt: Date
}
