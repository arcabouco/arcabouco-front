import { ArrowBack, KeyboardArrowDown } from 'styled-icons/material-sharp'

import styled from 'styled-components'
import { HTMLAttributes } from 'react'
import { media } from '../../../../utils/css'
import ScrollContainer from 'react-indiana-drag-scroll'

export const SoftwarePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #e5e8ef;
  height: 100%;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: min(20vw, 5rem);
  background: #e5e8ef;

  ${media.desktop} {
    display: none;
  }
`

export const Arrow = styled(ArrowBack)`
  margin-left: 5vw;
  height: 40%;
  transition: all 0.3s;

  :active {
    color: #8695a0;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 5vh;

  width: 100%;
  padding: min(12vw, 2.3rem) 6vw 0 6vw;
  border-radius: 1.5rem 1.5rem 0 0;
  background: #fff;

  ${media.desktop} {
    flex-direction: row-reverse;
    justify-content: center;
    padding: 0;
    background: #f5f6fb;
  }
`

export const SoftwareContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2vw;
`
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7vw;

  ${media.desktop} {
    flex-direction: row;
    gap: 1vw;
    width: 45vw;
    margin-top: 3vw;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  width: fit-content;
  height: fit-content;

  ${media.desktop} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    padding: 0 2vw;
  }
`

export const Image = styled.img`
  object-fit: contain;
  width: max-content;
  max-width: 100%;
  max-height: 20rem;
  border-radius: 0.5rem;
  margin: 0 auto;

  ${media.desktop} {
    max-width: 100%;
    max-height: 10vw;
  }
`

export const BasicInformation = styled.div`
  width: 100%;

  ${media.desktop} {
    display: flex;
    flex-direction: column;
  }
`

export const Title = styled.h3`
  color: #5c5b5b;
  font: 600 6vw Roboto, sans-serif;
  margin-bottom: 1vh;

  ${media.desktop} {
    font-size: 2vw;
  }
`

type DescriptionProps = HTMLAttributes<HTMLDivElement> & {
  opened: boolean
}

export const Description = styled.span<DescriptionProps>`
  display: block;
  display: -webkit-box;
  display: -moz-box;
  color: #505050;
  font: 400 4.9vw Roboto, sans-serif;
  line-height: 6.5vw;
  width: 100%;
  height: ${props => (props.opened ? '100%' : 'min-content')};
  max-height: ${props => (props.opened ? 'max-content' : '26vw')};

  -webkit-line-clamp: ${props => (props.opened ? 'auto' : '4')};
  -webkit-box-orient: vertical;
  overflow: ${props => (props.opened ? 'visible' : 'hidden')};

  text-overflow: ellipsis;

  ${media.desktop} {
    font-size: 1.4vw;
    line-height: 1.8vw;
    vertical-align: top;
    height: ${props => (props.opened ? '100%' : 'min-content')};
    max-height: ${props => (props.opened ? 'max-content' : '10vw')};
  }
`

export const SeeMore = styled.button`
  font: 400 4.5vw Roboto, sans-serif;
  color: #2fc863;
  cursor: pointer;

  ${media.desktop} {
    font-size: 1.3vw;
    margin-right: auto;
    margin-top: 0.4vw;
  }
`
type SeeMoreArrowProps = {
  opened: boolean
}

export const SeeMoreArrow = styled(KeyboardArrowDown)<SeeMoreArrowProps>`
  height: 100%;
  width: 20px;
  transform: ${props => (props.opened ? 'rotate(180deg)' : 'rotate(0deg)')};
  transition: transform 0.2s;
`

export const UseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  text-align: center;
  padding: 3vw 0;
  border-radius: 0.5rem;

  font: 600 4.5vw Roboto, sans-serif;
  color: #fff;
  background: #112b52;
  transition: background 0.3s ease-out;

  :active {
    background: #17407c;
  }

  ${media.desktop} {
    min-width: unset;
    width: 22vw;
    padding: 1vw 0;
    font-size: 0.8vw;
  }
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2vw;
  width: 100%;

  ${media.desktop} {
    width: 30vw;
    padding-top: 3vw;
    background: #fff;
  }
`

export const CategoriesLabel = styled.h2`
  color: #5c5b5b;
  font: 500 5.5vw Roboto, sans-serif;
  margin-bottom: 1vh;

  ${media.desktop} {
    font-size: 2vw;
    margin-left: 1vw;
  }
`

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3vw;
  padding: 5vw;
  border-radius: 0.5rem;
  background: #fcfcfc;

  ${media.desktop} {
    padding: 2vw 1vw 5vw 1vw;
    gap: 2vw;
    background: #fff;
  }
`

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

export const CategoryLabel = styled.span`
  border-left-color: #cdd3e2;
  border-left-style: solid;
  border-left-width: 0.2rem;
  padding-left: 0.3rem;

  font: 400 4.2vw Roboto, sans-serif;
  color: #b0acac;

  ${media.desktop} {
    font-size: 1.2vw;
    color: #000;
  }
`

export const TagContainer = styled(ScrollContainer)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  padding: 2vw 0;
  width: 100%;

  display: flex;
  font: 400 4vw Roboto, sans-serif;
  gap: 1.5vw;

  ${media.desktop} {
    padding: 1vw 0;
    font-size: 1.5vw;
    gap: 1vw;

    cursor: grab;

    user-select: none;

    ::-webkit-scrollbar {
      height: 0.4vw;
    }

    ::-webkit-scrollbar-track {
      background-color: #f5f6fb;
      border-radius: 100px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #e4e4e4;
      border-radius: 100px;
    }
  }
`

export const Tag = styled.span`
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 100vw;

  box-shadow: 0px 2.58418px 5.16835px rgba(16, 24, 64, 0.08);

  ${media.desktop} {
    color: #000;
    background: #f5f6fb;
    font: 400 1vw Sora, sans-serif;
    padding: 0.4vw 1vw;
    border-radius: 10%;
  }
`
