import { useState } from 'react'
import { TagCategory } from '../../../../../api/interfaces/TagCategory'
import {
  AddCategoryButton,
  AddCategoryIcon,
  CategoriesLabel,
  Category,
  CategoryContainer,
  CategoryList,
  CategoryName,
  Tag,
  TagContainer
} from './editSoftware.styles'

import * as Mock from '../../../../../api/Mock'

export const EditSoftwarePage = () => {
  const [categories, setCategories] = useState<null | TagCategory[]>(
    Mock.randomArrayOf(Mock.TagCategory, 5, 10, true)
  )

  return (
    <CategoryContainer>
      <CategoriesLabel>Categorias</CategoriesLabel>

      <CategoryList>
        {categories?.map(category => (
          <Category>
            <CategoryName>{category.name}</CategoryName>
            <TagContainer>
              {category.tags.map(tag => (
                <Tag>{tag.name}</Tag>
              ))}
            </TagContainer>
          </Category>
        ))}
        <AddCategoryButton>
          <AddCategoryIcon />
        </AddCategoryButton>
      </CategoryList>
    </CategoryContainer>
  )
}

export default EditSoftwarePage
