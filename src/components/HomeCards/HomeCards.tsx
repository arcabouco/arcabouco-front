import { UIEventHandler, useState } from 'react'
import {
  Button,
  Card,
  CardContainer,
  Description,
  RocketIcon,
  ScrollContainer,
  Container,
  AtomIcon,
  FakeCard
} from './HomeCards.styles'

import Link from 'next/link'

export const HomeCards = () => {
  const [scroll, setScroll] = useState(0)

  const handlerScroll: UIEventHandler = event => {
    const scrollLeft = event.target.scrollLeft
    const maxScrollLeft = event.target.scrollWidth - event.target.clientWidth
    const scroll = Math.min(Math.max(scrollLeft / maxScrollLeft, 0), 1)

    setScroll(scroll)
  }

  const handleCardClick = (newScroll: number) => (event: any) => {
    const scrollContent: HTMLDivElement =
      event.target.parentElement.parentElement.children[0]

    const maxScrollLeft = scrollContent.scrollWidth - scrollContent.clientWidth
    scrollContent.scrollTo(maxScrollLeft * newScroll, 0)
  }

  return (
    <Container>
      <ScrollContainer onScroll={handlerScroll}>
        <FakeCard />
        <FakeCard />
      </ScrollContainer>

      <CardContainer>
        <Card
          scroll={1 - scroll}
          onClick={handleCardClick(0)}
          style={{
            transform: `scale(${(1 - scroll) * 0.2 + 1}) translateY(-3%)`
          }}
        >
          <AtomIcon />
          <Description>
            Faça uma busca em nossa lista de <b>softwares</b>.
          </Description>
          <Link href={'/app/softwares'}>
            <Button scroll={scroll}> Iniciar </Button>
          </Link>
        </Card>

        <Card
          scroll={scroll}
          onClick={handleCardClick(1)}
          style={{
            transform: `scale(${scroll * 0.2 + 1}) translateY(-3%)`
          }}
        >
          <RocketIcon />
          <Description>
            Navegue pela nossa lista de <b>atividades</b>.
          </Description>
          {/* <Link href={'/app/activities'}> */}
          <Button scroll={1 - scroll}> Em breve </Button>
          {/* </Link> */}
        </Card>
      </CardContainer>
    </Container>
  )
}
