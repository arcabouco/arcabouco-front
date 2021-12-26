import { MouseEvent, UIEventHandler } from 'react'
import { ChangeEvent, UIEvent, useState } from 'react'
import {
  Button,
  Card,
  CardContainer,
  Description,
  AtomIcon,
  RocketIcon
} from './HomeCards.styles'
import { FakeCard, Container } from './HomeCards.styles'

export const HomeCards = () => {
  const [scroll, setScroll] = useState(0)
  const [max, setMax] = useState(0)
  const [current, setCurrent] = useState(0)

  const handlerScroll: UIEventHandler = event => {
    const scrollLeft = event.target.scrollLeft
    const maxScrollLeft = event.target.scrollWidth - event.target.clientWidth
    const scroll = Math.min(Math.max(scrollLeft / maxScrollLeft, 0), 1)

    setScroll(scroll)
  }

  const handleCardClick = (newScroll: number) => (event: any) => {
    const scrollContent: HTMLDivElement =
      event.target.parentElement.parentElement

    const maxScrollLeft = scrollContent.scrollWidth - scrollContent.clientWidth
    scrollContent.scrollTo(maxScrollLeft * newScroll, 0)
  }

  return (
    <Container onScroll={handlerScroll}>
      <FakeCard />
      <FakeCard />

      <CardContainer>
        <Card
          onClick={handleCardClick(1)}
          style={{ transform: `scale(${scroll * 0.4 + 1})` }}
        >
          <AtomIcon />
          <Description>
            Faça uma busca em nossa lista de <b>softwares</b>.
          </Description>
          <Button scroll={scroll}> Iniciar </Button>
        </Card>

        <Card
          onClick={handleCardClick(0)}
          style={{ transform: `scale(${(1 - scroll) * 0.4 + 1})` }}
        >
          <RocketIcon />
          <Description>
            Navegue pela nossa lista de <b>atividades</b>.
          </Description>
          <Button scroll={1 - scroll}> Iniciar </Button>
        </Card>
      </CardContainer>
    </Container>
  )
}
