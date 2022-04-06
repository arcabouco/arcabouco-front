import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { Software } from '../../../../api/interfaces/Software'
import { TagCategory } from '../../../../api/interfaces/TagCategory'
import {
  Arrow,
  BasicInformation,
  CategoriesLabel,
  Category,
  CategoryContainer,
  CategoryLabel,
  CategoryList,
  Description,
  Header,
  Image,
  InfoContainer,
  Main,
  SeeMore,
  SoftwareContainer,
  SoftwarePageContainer,
  Tag,
  TagContainer,
  Title,
  UseButton
} from './softwareDetails.style'

import * as Request from '../../../../api/Request'
import { NavBar } from '../../../../components/NavBar/NavBar'
import { ScreenContext } from '../../../../Context/Scheen'

const SoftwarePage = () => {
  const router = useRouter()
  const { isMobile } = useContext(ScreenContext)
  const [seeMoreOpened, setSeeMoreOpened] = useState(false)

  const handleSeeMore = () => setSeeMoreOpened(!seeMoreOpened)

  const [software, setSoftware] = useState<null | Software>(null)
  const [categories, setCategories] = useState<null | TagCategory[]>(null)

  useEffect(() => {
    if (!router.query.slug) return

    Request.getSoftware(router.query.slug as string).then(
      ({ categories, software }) => {
        setCategories(categories)
        setSoftware(software)
      }
    )
  }, [router.query.slug])

  return (
    <SoftwarePageContainer>
      <NavBar />
      <Header>
        <Arrow onClick={router.back} />
      </Header>

      <Main>
        <SoftwareContainer>
          <InfoContainer>
            <Image src={software?.images?.[0]?.url || '/empty-image.png'} />
            <BasicInformation>
              <Title>{software?.name} </Title>
              <Description opened={seeMoreOpened}>
                {software?.description}
              </Description>
              <SeeMore onClick={handleSeeMore}>Ler mais</SeeMore>
            </BasicInformation>
          </InfoContainer>
          <Link href={software?.link || ''}>
            <UseButton>USAR ESSE SOFTWARE</UseButton>
          </Link>
        </SoftwareContainer>

        <CategoryContainer>
          <CategoriesLabel>Marcadores</CategoriesLabel>

          <CategoryList>
            {categories?.map(category => (
              <Category key={category.id}>
                <CategoryLabel>{category.name}</CategoryLabel>
                <TagContainer hideScrollbars={isMobile}>
                  {category.tags.map(tag => (
                    <Tag key={tag.id}>{tag.name}</Tag>
                  ))}
                </TagContainer>
              </Category>
            ))}
          </CategoryList>
        </CategoryContainer>
      </Main>
    </SoftwarePageContainer>
  )
}
export default SoftwarePage
