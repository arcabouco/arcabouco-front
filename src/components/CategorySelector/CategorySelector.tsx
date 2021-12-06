import React, { useEffect, useState } from 'react'
import { TagCategory } from '../../api/interfaces/TagCategory'
import {
  Categories,
  Category,
  DoneButton,
  Footer,
  SelectorContainer,
  TagCheckBox,
  TagLabel,
  Tags
} from './CategorySelector.syles'
import { Title } from '../SideNav/SidNav.styles'
import { Tag } from '../../api/interfaces/Tag'

type CategorySelectorProps = {
  categories: TagCategory[]
} & React.HTMLAttributes<HTMLDivElement>

export const CategorySelector = ({ categories }: CategorySelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState({} as TagCategory)
  const [selectedTags, setSelectedTags] = useState([] as Tag[])

  const handleCategoryClick =
    (category: TagCategory) => (event: React.MouseEvent<HTMLLIElement>) =>
      setSelectedCategory(category)

  const handleTagClick =
    (tagId: string) => (event: React.MouseEvent<HTMLLIElement>) => {
      console.log(event)
    }

  return (
    <SelectorContainer>
      <Title> {selectedCategory.id ? 'Tags' : 'Categorias'} </Title>

      <Categories selectedCategory={selectedCategory}>
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            label={category.name}
            onClick={handleCategoryClick(category)}
          />
        ))}
      </Categories>

      <Tags selectedCategory={selectedCategory}>
        {selectedCategory?.tags &&
          selectedCategory.tags.map(tag => (
            <TagItem
              key={tag.id}
              label={tag.name}
              onClick={handleTagClick(tag)}
            />
          ))}
      </Tags>

      <Footer>
        <DoneButton selectedTags={selectedTags}> Ok </DoneButton>
      </Footer>
    </SelectorContainer>
  )
}

type CategoryItemProps = {
  label: string
} & React.HTMLAttributes<HTMLLIElement>

const CategoryItem = ({ label, ...props }: CategoryItemProps) => (
  <li {...props}>
    <Category> {label} </Category>
  </li>
)

type TagItemProps = {
  label: string
} & React.HTMLAttributes<HTMLLIElement>

const TagItem = ({ label }: TagItemProps) => (
  <TagLabel>
    <TagCheckBox type="checkbox" id="tagInput" />
    {label}
  </TagLabel>
)
