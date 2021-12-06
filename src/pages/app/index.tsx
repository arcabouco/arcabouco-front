import * as Mock from '../../api/Mock'

import { CategorySelector } from '../../components/CategorySelector/CategorySelector'

const AppPage = () => {
  const categories = Mock.randomArrayOf(() => Mock.TagCategory(true), 10, 20)

  return <CategorySelector categories={categories}></CategorySelector>
}

export default AppPage
