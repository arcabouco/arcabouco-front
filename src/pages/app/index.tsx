import { useState } from 'react'
import * as Mock from '../../api/Mock'

import { onDoneDTO } from '../../components/CategorySelector/CategorySelector'
import { SoftwareCard } from '../../components/SoftwareCard/SoftwareCard.styles'
import {
  AddButton,
  AddButtonContainer,
  AddCategorySelector,
  Main,
  PageContainer
} from './app.styles'

const AppPage = () => {
  const [selectorOpen, setSelectorOpen] = useState(false)

  const [categories, setCategories] = useState(
    Mock.randomArrayOf(() => Mock.TagCategory(true), 10, 20)
  )

  const handleAddButton = () => {
    setSelectorOpen(!selectorOpen)
  }

  const handleDoneSelector = ({ category, tags }: onDoneDTO) => {
    setSelectorOpen(false)
  }

  return (
    <PageContainer>
      <AddButtonContainer>
        <AddButton onClick={handleAddButton} />
        <AddCategorySelector
          categories={categories}
          onDone={handleDoneSelector}
          setIsOpened={setSelectorOpen}
          isOpened={selectorOpen}
        />
      </AddButtonContainer>
      <Main>
        <SoftwareCard />
      </Main>
    </PageContainer>
  )
}

export default AppPage
