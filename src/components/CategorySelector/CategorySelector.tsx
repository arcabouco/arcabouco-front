import { HTMLAttributes, MouseEvent, useState } from 'react'
import { TagCategory } from '../../api/interfaces/TagCategory'
import {
  ApplyFilterButton,
  Categories,
  CategoryButton,
  CategoryIcon,
  CategoryLabel,
  CloseButton,
  Footer,
  Header,
  ResetFilterButton,
  SelectorContainer,
  TagCheckBox,
  TagLabel,
  Tags,
  TagSelectionDoneButton,
  TagsHeader,
  Title
} from './CategorySelector.syles'
import { Tag } from '../../api/interfaces/Tag'

type CategorySelectorProps = {
  categories: TagCategory[]
  onDone?: (categories: TagCategory[]) => void
  setIsOpened?: (isOpened: boolean) => void
  isOpened?: boolean
  filteredCategories?: TagCategory[]
} & HTMLAttributes<HTMLDivElement>

export const CategorySelector = ({
  categories,
  setIsOpened = () => {},
  onDone = () => {},
  filteredCategories = []
}: CategorySelectorProps) => {
  const [currentTags, setCurrentTags] = useState([] as Tag[])
  const [currentCategory, setCurrentCategory] = useState<TagCategory | null>(
    null
  )
  const [selectedCategories, setSelectedCategories] =
    useState(filteredCategories)

  const handleCategoryClick =
    (clickedCategory: TagCategory) => (event: MouseEvent) => {
      event.stopPropagation()

      setCurrentCategory(clickedCategory)
      const alreadySelectedTags = selectedCategories.find(
        category => category.id === clickedCategory.id
      )

      if (alreadySelectedTags) setCurrentTags(alreadySelectedTags.tags)
      else setCurrentTags([])
    }

  const handleTagClick = (clickedTag: Tag) => (event: MouseEvent) => {
    event.stopPropagation()
    const alreadySelected = currentTags.find(
      currentTag => currentTag.id === clickedTag.id
    )

    if (alreadySelected)
      setCurrentTags(
        currentTags.filter(selectedTag => selectedTag.id !== clickedTag.id)
      )
    else setCurrentTags([...currentTags, clickedTag])
  }

  const handleTagSelectionDone = (event: MouseEvent) => {
    event.stopPropagation()
    if (!currentCategory) return

    const newSelectedCategory = { ...currentCategory }

    newSelectedCategory.tags = currentTags

    const newSelectedCategories = selectedCategories
      .filter(
        selectedCategory => selectedCategory.id !== newSelectedCategory.id
      )
      .concat(newSelectedCategory.tags.length ? newSelectedCategory : [])

    setCurrentCategory(null)
    setCurrentTags([])
    setSelectedCategories(newSelectedCategories)
  }

  const handleApplyFilter = (event: MouseEvent) => {
    event.stopPropagation()
    onDone(selectedCategories)
    setIsOpened(false)
  }

  const handleResetFilter = (event: MouseEvent) => {
    event.stopPropagation()
    setSelectedCategories([])
    setCurrentTags([])
    setCurrentCategory(null)
    onDone([])
    setIsOpened(false)
  }

  return (
    <SelectorContainer>
      <Header>
        <CloseButton onClick={() => setIsOpened(false)} />
        <Title> Filtros </Title>
      </Header>

      {currentCategory ? (
        <>
          <TagsHeader>
            <CategoryItem category={currentCategory}></CategoryItem>
          </TagsHeader>
          <Tags>
            {currentCategory.tags.map(tag => (
              <TagItem
                tag={tag}
                selectedTags={currentTags}
                onClick={handleTagClick(tag)}
                key={tag.id}
              />
            ))}
          </Tags>
        </>
      ) : (
        <Categories>
          {categories.map(category => (
            <CategoryItem
              key={category.id}
              onClick={handleCategoryClick(category)}
              category={category}
            />
          ))}
        </Categories>
      )}

      <Footer>
        {currentCategory ? (
          <TagSelectionDoneButton onClick={handleTagSelectionDone}>
            Concluir
          </TagSelectionDoneButton>
        ) : (
          <>
            <ApplyFilterButton onClick={handleApplyFilter}>
              APLICAR FILTRO
            </ApplyFilterButton>
            <ResetFilterButton onClick={handleResetFilter}>
              LIMPAR FILTROS
            </ResetFilterButton>
          </>
        )}
      </Footer>
    </SelectorContainer>
  )
}

type CategoryItemProps = {
  category: TagCategory
} & React.HTMLAttributes<HTMLDivElement>

const CategoryItem = ({ category, ...props }: CategoryItemProps) => (
  <div {...props}>
    <CategoryButton>
      <CategoryIcon />
      <CategoryLabel>{category.name}</CategoryLabel>
    </CategoryButton>
  </div>
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
      defaultChecked={
        !!selectedTags.find(selectedTag => selectedTag.id === tag.id)
      }
    />
    {tag.name}
  </TagLabel>
)
