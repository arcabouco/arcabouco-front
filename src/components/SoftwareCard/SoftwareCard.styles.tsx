import { Card } from '../Card/Card'
import { StyledImage, CardContainer, ImageContainer } from './SoftwareCard'

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
