import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Software } from '../../../../api/interfaces/Software'
import EmptyImage from '../../../../../public/empty-image.png'
import NextImage from 'next/image'
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
  Main,
  NextImageContainer,
  SeeMore,
  SeeMoreArrow,
  SoftwarePageContainer,
  Tag,
  TagContainer,
  Title,
  UseButton
} from './softwareDetails.style'

import * as Request from '../../../../api/Request'

const SoftwarePage = () => {
  const router = useRouter()
  const [seeMoreOpened, setSeeMoreOpened] = useState(true)

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
      <Header>
        <Arrow onClick={router.back} />
      </Header>

      <Main>
        {software?.images?.[0] ? (
          <Image src={software?.images?.[0]?.url} />
        ) : (
          <NextImageContainer style={{ width: '100%', display: 'flex' }}>
            <NextImage src={EmptyImage} width={200} height={200} />
          </NextImageContainer>
        )}

        <BasicInformation>
          <Title>{software?.name} </Title>
          <Description opened={seeMoreOpened}>
            {software?.description}
          </Description>
          <SeeMore onClick={handleSeeMore}>
            <SeeMoreArrow opened={seeMoreOpened} />
            Ler toda descrição
          </SeeMore>
        </BasicInformation>

        <Link href={software?.link || ''}>
          <UseButton>USAR ESSE SOFTWARE</UseButton>
        </Link>

        <CategoryContainer>
          <CategoriesLabel>Categorias</CategoriesLabel>

          <CategoryList>
            {categories?.map(category => (
              <Category>
                <CategoryLabel>{category.name}</CategoryLabel>
                <TagContainer>
                  {category.tags.map(tag => (
                    <Tag>{tag.name}</Tag>
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
