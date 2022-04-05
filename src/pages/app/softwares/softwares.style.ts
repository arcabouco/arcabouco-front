import styled from 'styled-components'
import { Search } from 'styled-icons/material'
import { media } from '../../../utils/css'

type SoftwareListPageProps = {
  noScroll?: boolean
}

export const SoftwareListPageContainer = styled.div<SoftwareListPageProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  overflow-y: ${props => (props.noScroll ? 'hidden' : 'visible')};
  background: #f5f6fb;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;

  ${media.desktop} {
    flex-direction: row;
    justify-content: space-between;
    gap: 2vw;
  }
`

export const FilterContainer = styled.div`
  /* display: none; */
  /* flex-direction: column; */

  ${media.desktop} {
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 25vw;
    height: 85vh;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${media.desktop} {
    display: flex;
    flex-direction: column;
    margin-top: 5vh;
  }
`

export const FilterTitle = styled.h2`
  display: none;

  ${media.desktop} {
    display: block;
    font: 500 1vw Roboto, sans-serif;
    text-align: left;
    width: 100%;
    margin: 3vw 1vw 0;
  }
`

export const FilterButton = styled.div`
  position: fixed;
  background: #122c53;
  border-radius: 50%;
  border: 3vw solid #122c53;
  bottom: 5vh;
  right: 10vw;
  z-index: 10;

  ${media.desktop} {
    display: none;
  }
`

export const FilterIcon = styled(Search)`
  width: 10vw;
  color: #fff;
`

export const FilterButtonDesk = styled.button`
  display: none;
  ${media.desktop} {
    display: block;
    /* border: 1px dashed #000; */
    margin: 1vw 1vw 0;
    width: 6vw;
    font: 500 0.8vw Roboto, sans-serif;
    color: #5c5b5b;
    /* padding: 1vw */
    padding: 0.5vw;

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='4' ry='4' stroke='black' stroke-width='3' stroke-dasharray='8' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 5px;

    cursor: pointer;
  }
`

export const Title = styled.h1`
  color: #000;
  font: 500 6vw Roboto, sans-serif;
  margin: 3vw auto 1vw 5vw;

  ${media.desktop} {
    font: 500 1.6vw Roboto, sans-serif;
    text-align: left;
    width: 100%;
    margin: 0;
    margin-bottom: 2vh;
  }
`

export const SubTitle = styled.h1`
  color: #000;
  font: 400 4vw Roboto, sans-serif;
  margin: 3vw auto 2vw 5vw;

  ${media.desktop} {
    font: 400 1vw Roboto, sans-serif;
    text-align: left;
    width: 100%;
    margin: 0;
    margin-bottom: 2vh;
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

  cursor: pointer;

  ${media.desktop} {
    width: 40vw;
    height: 13vw;
    padding: 1vw 1vw;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  height: 100%;

  border-radius: 2vw;
  background: #e5e8ef;

  ${media.desktop} {
    border-radius: 0.8vw;
  }
`

export const Image = styled.img`
  object-fit: contain;
  width: max-content;
  max-width: 100%;
  max-height: 100%;
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

  ${media.desktop} {
    gap: 1vw;
  }
`

export const SoftwareName = styled.h3`
  color: #5c5b5b;
  font: 600 5vw Roboto, sans-serif;

  ${media.desktop} {
    font: 600 1vw Roboto, sans-serif;
  }
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

  ${media.desktop} {
    font: 400 1.03vw Roboto, sans-serif;
    -webkit-line-clamp: 7;
  }
`
