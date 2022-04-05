import {
  FilterButton,
  FilterIcon,
  IconContainer,
  Image,
  List,
  SoftwareCard,
  SoftwareDescription,
  SoftwareInformation,
  SoftwareListPageContainer,
  SoftwareName,
  Title
} from './softwares.style'
import EmptyImage from '../../../../public/empty-image.png'
import { TopBar } from '../../../components/TopBar/TopBar'
import Link from 'next/link'
import { useContext, useEffect, useState } from 'react'
import { CategorySelector } from '../../../components/CategorySelector/CategorySelector'
import * as Mock from '../../../api/Mock'
import NextImage from 'next/image'
import * as Context from '../../../Context'

const SoftwareListPage = () => {
  const { reload, softwares } = useContext(Context.Software.SoftwareContext)

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [categories] = useState(
    Mock.randomArrayOf(() => Mock.TagCategory(true), 10, 20)
  )

  useEffect(() => {
    reload()
  }, [])

  return (
    <SoftwareListPageContainer noScroll={isFilterOpen}>
      <CategorySelector
        categories={categories}
        isOpened={isFilterOpen}
        setIsOpened={setIsFilterOpen}
      >
        <FilterButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
          <FilterIcon />
        </FilterButton>
      </CategorySelector>

      <TopBar />

      <Title>
        <b>{softwares?.length}</b> softwares listados
      </Title>

      <List>
        {softwares.map(software => (
          <Link href={`/app/softwares/${software.id}`} key={software.id}>
            <SoftwareCard>
              <IconContainer>
                {software?.images?.[0] ? (
                  <Image
                    src={software?.images?.[0]?.url}
                    width={software?.images?.[0]?.width}
                    height={software?.images?.[0]?.height}
                  />
                ) : (
                  <NextImage src={EmptyImage} />
                )}
              </IconContainer>
              <SoftwareInformation>
                <SoftwareName>{software.name}</SoftwareName>
                <SoftwareDescription>
                  {software.description}
                </SoftwareDescription>
              </SoftwareInformation>
            </SoftwareCard>
          </Link>
        ))}
      </List>
    </SoftwareListPageContainer>
  )
}

export default SoftwareListPage
