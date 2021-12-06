import styled from 'styled-components'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { HTMLProps } from 'react'

interface ImageProps extends NextImageProps {
  className?: string
}

const Wrapper = styled.div`
  display: flex;
`

export const Image = ({ className, ...props }: ImageProps) => (
  <Wrapper className={className}>
    <NextImage {...props} />
  </Wrapper>
)
