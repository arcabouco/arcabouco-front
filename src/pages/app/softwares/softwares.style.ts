import styled from 'styled-components'
import Image from 'next/image'
import { Search } from 'styled-icons/material'

export const SoftwareListPageContainer = styled.div<{
  noScroll?: boolean
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  overflow-y: ${props => (props.noScroll ? 'hidden' : 'visible')};
  background: #f5f6fb;
`

export const FilterButton = styled.div`
  position: fixed;
  background: #122c53;
  border-radius: 50%;
  border: 3vw solid #122c53;
  bottom: 5vh;
  right: 10vw;
  z-index: 10;
`

export const FilterIcon = styled(Search)`
  width: 10vw;
  color: #fff;
`

export const Title = styled.h1`
  color: #000;
  font: 400 min(5vw, 2rem) Roboto, sans-serif;
  margin: min(2rem, 5vh) auto 2vh 5vw;
  b {
    font-weight: 500;
  }
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1.2rem;

  width: 100%;
  height: max-content;
  min-height: 100%;
`

export const SoftwareCard = styled.div`
  display: flex;
  align-items: center;
  gap: 2vw;

  // ratio 1:4
  width: 90vw;
  height: 36vw;
  border-radius: 0.9rem;
  padding: 4vw 4vw;

  background: #fff;
  filter: drop-shadow(0px 2.58px 5.16px rgba(16, 24, 64, 0.08));
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  height: 100%;

  border-radius: 2vw;
  background: #e5e8ef;
`

export const SoftwareInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2vw;

  max-height: 100%;
  height: 100%;
  width: 100%;
`

export const SoftwareName = styled.h3`
  color: #5c5b5b;
  font: 600 5vw Roboto, sans-serif;
`

export const SoftwareDescription = styled.div`
  display: block;
  display: -webkit-box;
  display: -moz-box;
  color: #757575;
  font: 400 4vw Roboto, sans-serif;
  max-width: 100%;
  max-height: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;

  overflow: hidden;

  text-overflow: ellipsis;
`
