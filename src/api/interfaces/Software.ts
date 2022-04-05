import { SoftwareImage } from './SoftwareImage'
import { Tag } from './Tag'
import { User } from './User'

export type Software = {
  id: string

  name: string

  description: string

  link: string

  tags: Tag[]

  user: User

  images: SoftwareImage[]

  createdAt: Date

  updatedAt: Date
}
