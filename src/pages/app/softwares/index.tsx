import {
  FilterButton,
  FilterIcon,
  IconContainer,
  List,
  SoftwareCard,
  SoftwareDescription,
  SoftwareInformation,
  SoftwareListPageContainer,
  SoftwareName,
  Title
} from './softwares.style'
import Image from 'next/image'
import TestImage from '../../../../public/image.png'
import { TopBar } from '../../../components/TopBar/TopBar'
import Link from 'next/link'
import { Popover } from 'react-tiny-popover'
import { useEffect, useState } from 'react'
import { CategorySelector } from '../../../components/CategorySelector/CategorySelector'
import * as Mock from '../../../api/Mock'
import { Software } from '../../../api/interfaces/Software'
import * as Request from '../../../api/Request'

const SoftwareListPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const [categories, setCategories] = useState(
    Mock.randomArrayOf(() => Mock.TagCategory(true), 10, 20)
  )

  const [softwares, setSoftwares] = useState([] as Software[])

  useEffect(() => {
    Request.listSoftwares().then(setSoftwares)
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
        <b>{softwares.length}</b> softwares listados
      </Title>

      <List>
        {softwares.map(software => (
          <Link href={`/app/softwares/${software.id}`} key={software.id}>
            <SoftwareCard>
              <IconContainer>
                <Image src={TestImage} />
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
