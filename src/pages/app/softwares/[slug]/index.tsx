import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
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
  Main,
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
        {/* <Image src="https://hackernoon.com/hn-images/0*xMaFF2hSXpf_kIfG.jpg" /> */}
        {/* <Image src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80" /> */}
        <Image src="data:image/jpeg;base64,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" />

        <BasicInformation>
          <Title>{software?.name} </Title>
          <Description opened={seeMoreOpened}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
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