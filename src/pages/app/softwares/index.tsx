import {
  FilterButton,
  FilterButtonDesk,
  FilterContainer,
  FilterIcon,
  FilterTitle,
  IconContainer,
  Image,
  List,
  ListContainer,
  Main,
  SoftwareCard,
  SoftwareDescription,
  SoftwareInformation,
  SoftwareListPageContainer,
  SoftwareName,
  SubTitle,
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
import { NavBar } from '../../../components/NavBar/NavBar'
import { DefaultFooter } from '../../../components/DefaultFooter/DefaultFooter'
import { Popover } from 'react-tiny-popover'
import { Request } from '../../../api'
import { Software } from '../../../api/interfaces/Software'
import { ScreenContext } from '../../../Context/Scheen'
import { TagCategory } from '../../../api/interfaces/TagCategory'

const SoftwareListPage = () => {
  const { isMobile } = useContext(ScreenContext)

  const [softwares, setSoftwares] = useState([] as Software[])

  const [categories, setCategories] = useState([] as TagCategory[])
  const [filteredCategories, setFilteredCategories] = useState(
    [] as TagCategory[]
  )

  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    if (isMobile && isFilterOpen) document.body.style.overflowY = 'hidden'
    else document.body.style.overflowY = 'visible'
  }, [isMobile, isFilterOpen])

  useEffect(() => {
    Request.listSoftwares(filteredCategories).then(setSoftwares)
    Request.listSoftwareCategories().then(({ softwareCategories }) =>
      setCategories(softwareCategories)
    )
  }, [filteredCategories])

  return (
    <SoftwareListPageContainer noScroll={isFilterOpen}>
      <NavBar />
      <TopBar />

      <Main>
        <FilterContainer>
          <FilterTitle>Filtre sua busca</FilterTitle>

          <Popover
            content={
              <CategorySelector
                categories={categories}
                setIsOpened={setIsFilterOpen}
                onDone={setFilteredCategories}
                filteredCategories={filteredCategories}
              />
            }
            positions={['bottom', 'left']}
            isOpen={isFilterOpen}
            // onClickOutside={() => setIsFilterOpen(false)}
          >
            {isMobile ? (
              <>
                {!isFilterOpen && (
                  <FilterButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    <FilterIcon />
                  </FilterButton>
                )}
              </>
            ) : (
              <FilterButtonDesk onClick={() => setIsFilterOpen(!isFilterOpen)}>
                Filtrar
              </FilterButtonDesk>
            )}
          </Popover>

          {/* <CategorySelector
            categories={categories}
            isOpened={true}
            setIsOpened={setIsFilterOpen}
          >
            <>
              <FilterButton onClick={() => setIsFilterOpen(!isFilterOpen)}>
                <FilterIcon />
              </FilterButton>
              <FilterButtonDesk onClick={() => setIsFilterOpen(!isFilterOpen)}>
                Filtrar
              </FilterButtonDesk>
            </>
          </CategorySelector> */}
        </FilterContainer>

        <ListContainer>
          <Title>Catálogo de Softwares</Title>
          <SubTitle>
            <b>{softwares?.length}</b> softwares listados
          </SubTitle>

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
        </ListContainer>
      </Main>

      <DefaultFooter />
    </SoftwareListPageContainer>
  )
}

export default SoftwareListPage
