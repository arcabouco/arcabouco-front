import React, { HTMLAttributes, useEffect, useState } from 'react'
import { TagCategory } from '../../api/interfaces/TagCategory'
import {
  Categories,
  Category,
  DoneButton,
  Footer,
  Header,
  SelectorContainer,
  SubTitle,
  TagCheckBox,
  TagLabel,
  Tags
} from './CategorySelector.syles'
import { Title } from '../SideNav/SidNav.styles'
import { Tag } from '../../api/interfaces/Tag'

export type onDoneDTO = { category: TagCategory; tags: Tag[] }

type CategorySelectorProps = {
  categories: TagCategory[]
  onDone?: (dto: onDoneDTO) => void
  setIsOpened?: (isOpened: boolean) => void
  isOpened?: boolean
} & HTMLAttributes<HTMLDivElement>

export const CategorySelector = ({
  categories,
  isOpened = true,
  setIsOpened = () => {},
  onDone = () => {},
  ...props
}: CategorySelectorProps) => {
  const [selectedCategory, setSelectedCategory] = useState({} as TagCategory)
  const [selectedTags, setSelectedTags] = useState([] as Tag[])

  const handleCategoryClick = (category: TagCategory) => () =>
    setSelectedCategory(category)

  const handleTagClick = (tag: Tag) => () => {
    const selectedTagIndex = selectedTags.findIndex(
      selectedTag => selectedTag.id === tag.id
    )

    const tagExists = selectedTags[selectedTagIndex]

    if (tagExists)
      setSelectedTags(
        selectedTags.filter(selectedTag => selectedTag.id !== tag.id)
      )
    else setSelectedTags([...selectedTags, tag])
  }

  const handleDoneClick = () => {
    onDone({ category: selectedCategory, tags: selectedTags })
  }

  useEffect(() => {
    setSelectedCategory({} as TagCategory)
    setSelectedTags([])
  }, [isOpened])

  return (
    <SelectorContainer isOpened={isOpened} {...props}>
      <Header>
        <Title> {selectedCategory.id ? 'Tags' : 'Categorias'} </Title>
        <SubTitle selectedCategory={selectedCategory}>
          de {selectedCategory.name}
        </SubTitle>
      </Header>

      <Categories selectedCategory={selectedCategory}>
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            onClick={handleCategoryClick(category)}
            category={category}
          />
        ))}
      </Categories>

      <Tags selectedCategory={selectedCategory}>
        {selectedCategory?.tags &&
          selectedCategory.tags.map(tag => (
            <TagItem
              tag={tag}
              selectedTags={selectedTags}
              onClick={handleTagClick(tag)}
              key={tag.id}
            />
          ))}
      </Tags>

      <Footer>
        <DoneButton selectedTags={selectedTags} onClick={handleDoneClick}>
          Ok
        </DoneButton>
      </Footer>
    </SelectorContainer>
  )
}

type CategoryItemProps = {
  category: TagCategory
} & React.HTMLAttributes<HTMLLIElement>

const CategoryItem = ({ category, ...props }: CategoryItemProps) => (
  <li {...props}>
    <Category> {category.name} </Category>
  </li>
)

type TagItemProps = {
  tag: Tag
  selectedTags: Tag[]
  onClick: (event: React.MouseEvent<HTMLInputElement>) => void
} & React.HTMLAttributes<HTMLInputElement>

const TagItem = ({ tag, onClick, selectedTags }: TagItemProps) => (
  <TagLabel>
    <TagCheckBox
      onClick={onClick}
      type="checkbox"
      id="tagInput"
      defaultChecked={selectedTags.some(
        selectedTag => selectedTag.id === tag.id
      )}
    />
    {tag.name}
  </TagLabel>
)
