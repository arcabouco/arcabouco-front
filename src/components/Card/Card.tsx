import { HTMLAttributes } from 'react'
import { CardContainer } from './Card.styled'

type CardProps = {
  children?: React.ReactNode
} & HTMLAttributes<HTMLDivElement>

export const Card = ({ children, ...props }: CardProps) => (
  <CardContainer {...props}>{children}</CardContainer>
)
