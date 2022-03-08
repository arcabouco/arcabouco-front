import { MouseEvent, UIEventHandler } from 'react'
import { ChangeEvent, UIEvent, useState } from 'react'
import {
  Button,
  Card,
  CardContainer,
  Description,
  RocketIcon,
  ScrollContainer,
  Container,
  AtomIcon
} from './HomeCardsOld.styles'
import { FakeCard } from './HomeCardsOld.styles'

import Atom from '../../assets/atom.svg'
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
    console.log(event.target)
    console.log(scrollContent)
  }

  return (
    <Container>
      <ScrollContainer onScroll={handlerScroll}>
        <FakeCard />
        <FakeCard />
      </ScrollContainer>

      <CardContainer>
        <Card
          onClick={handleCardClick(0)}
          style={{
            transform: `scale(${(1 - scroll) * 0.25 + 1}) translateY(-3%)`
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
          onClick={handleCardClick(1)}
          style={{
            transform: `scale(${scroll * 0.25 + 1}) translateY(-3%)`
          }}
        >
          <RocketIcon />
          <Description>
            Navegue pela nossa lista de <b>atividades</b>.
          </Description>
          <Link href={'/app/activities'}>
            <Button scroll={1 - scroll}> Iniciar </Button>
          </Link>
        </Card>
      </CardContainer>
    </Container>
  )
}
