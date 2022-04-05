import { ArrowBack, KeyboardArrowDown } from 'styled-icons/material-sharp'

import styled from 'styled-components'
import { HTMLAttributes } from 'react'

export const SoftwarePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: #e5e8ef;
  width: 100vw;
  height: 100%;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: min(20vw, 5rem);
  background: #e5e8ef;
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
  min-height: 100vh;
  padding: min(12vw, 2.3rem) 6vw 0 6vw;
  border-radius: 1.5rem 1.5rem 0 0;
  background: #fff;
`

export const ImageContainerContainer = styled.div`
  width: 100%;
  height: 10rem;
  max-height: 10rem;
`

export const Image = styled.img`
  object-fit: contain;
  width: max-content;
  max-width: 100%;
  max-height: 20rem;
  border-radius: 0.5rem;
  margin: 0 auto;
`

export const NextImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  width: 100%;
  margin: 0 auto;
`

export const BasicInformation = styled.div`
  width: 100%;
`

export const Title = styled.h3`
  color: #5c5b5b;
  font: 600 6vw Roboto, sans-serif;
  margin-bottom: 1vh;
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
  height: ${props => (props.opened ? '100%' : '26vw')};
  -webkit-line-clamp: ${props => (props.opened ? 'auto' : '4')};
  -webkit-box-orient: vertical;
  overflow: ${props => (props.opened ? 'visible' : 'hidden')};

  text-overflow: ellipsis;
  transition: height 4s ease-out;
`

export const SeeMore = styled.button`
  font: 400 3vw Roboto, sans-serif;
  width: 100%;
  height: 6vw;
  background: #e5e8ef;
  width: 100%;
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
  display: block;
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
`

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2vw;
  width: 100%;
`

export const CategoriesLabel = styled.h2`
  color: #5c5b5b;
  font: 500 5.5vw Roboto, sans-serif;
  margin-bottom: 1vh;
`

export const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3vw;
  padding: 5vw;
  border-radius: 0.5rem;
  background: #fcfcfc;
  /* div + div {
    margin-left: vw;
  } */
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
`

export const TagContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  padding: 2vw 0;
  width: 100%;

  display: flex;
  font: 400 4vw Roboto, sans-serif;
  gap: 1.5vw;
`

export const Tag = styled.span`
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 100vw;

  box-shadow: 0px 2.58418px 5.16835px rgba(16, 24, 64, 0.08);
`
