import { TagCategory } from '../../api/Mock'
import { Card } from '../Card/Card'
import {
  Title,
  StyledImage,
  CardContainer,
  ImageContainer
} from './SoftwareCard'
import Image from 'next/image'
import faker from 'faker'

const category = TagCategory(true)

export const SoftwareCard = () => (
  <Card>
    <CardContainer>
      <ImageContainer>
        <StyledImage
          src={
            'https://www.aliger.com.br/wp-content/uploads/2018/07/206658-o-que-esperar-da-tecnologia-definida-por-software.jpg'
          }
          height={1000}
          width={1000}
          layout="fill"
        />
      </ImageContainer>
    </CardContainer>
  </Card>
)
