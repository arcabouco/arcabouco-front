import styled from 'styled-components'
import Image from 'next/image'

export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: top;
  /* justify-content: center; */
`

export const Title = styled.h3`
  display: flex;
  position: static;
  /* flex-direction: column; */
  justify-content: flex-end;
  width: 100%;
  font-size: 1.5rem;
  color: #131313;
  padding-right: 2rem;
`
export const StyledImage = styled(Image)``

export const ImageContainer = styled.div`
  position: relative;
  min-width: 200px !important;
  min-height: 50px !important;
  object-fit: contain;
  /* object-position: left; */
  overflow: hidden;
`
