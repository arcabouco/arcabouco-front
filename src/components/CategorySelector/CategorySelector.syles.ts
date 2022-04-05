import React from 'react'
import styled from 'styled-components'
import { Close, Storage } from 'styled-icons/material'
import { media } from '../../utils/css'

export const SelectorContainer = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: left;
  z-index: 10;

  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
  gap: 1rem;

  background: #fff;

  ${media.desktop} {
    gap: 1vw;
    width: 25vw;
    height: 70vh;
    position: static;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: #e5e8ef;
  width: 100%;
  padding: 1rem 1rem;
  gap: 2vw;

  ${media.desktop} {
    gap: 1vw;
  }
`

export const CloseButton = styled(Close)`
  width: 6vw;
  color: #5c5b5b;
  cursor: pointer;

  ${media.desktop} {
    width: 1.8vw;
  }
`

export const Title = styled.h3`
  font: 400 5vw Roboto, sans-serif;
  color: #0f2951;

  ${media.desktop} {
    font: 400 1.4vw Roboto, sans-serif;
  }
`

type CategoryProps = {
  isEnable: boolean
} & React.HTMLAttributes<HTMLUListElement>

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  padding: 6vw 6vw;
  gap: 8vw;
  overflow-y: scroll;

  list-style-type: none;

  ${media.desktop} {
    gap: 1vw;
    padding: 1vw 1vw;
  }
`

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;

  ${media.desktop} {
    gap: 1vw;
  }
`

export const CategoryIcon = styled(Storage)`
  width: 6vw;
  color: #909090;

  ${media.desktop} {
    width: 2vw;
  }
`

export const CategoryLabel = styled.span`
  font: 400 5vw Sora, sans-serif;
  color: #4d4d4d;

  ${media.desktop} {
    font: 400 1vw Sora, sans-serif;
  }
`

export const TagsHeader = styled.div`
  padding: 6vw 6vw 4vw;
`

type TagsProps = {
  isEnable: boolean
} & React.HTMLAttributes<HTMLUListElement>

export const Tags = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 8vw;
  padding: 0 14vw;

  list-style-type: none;
`

export const TagLabel = styled.label`
  display: flex;
  align-items: center;

  font: 400 5vw Sora, sans-serif;
  gap: 2vw;

  white-space: nowrap;
`

export const TagCheckBox = styled.input`
  height: 5vw;
  width: 5vw;
  outline: 0vw solid #000;
`
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const ApplyFilterButton = styled.button`
  text-align: center;
  width: 100%;
  background: #112b52;
  font: 500 4.5vw Sora, sans-serif;
  color: #fff;
  padding: 3vw 0;

  ${media.desktop} {
    font: 500 0.8vw Sora, sans-serif;
    padding: 1vw 0;
  }
`
export const ResetFilterButton = styled(ApplyFilterButton)`
  background: #fff;
  color: #112b52;

  ${media.desktop} {
    font: 500 0.8vw Sora, sans-serif;
  }
`

export const TagSelectionDoneButton = styled.button`
  padding: 3vw 0;
  margin: 2vw;
  width: 95%;

  font: 500 4.5vw Sora, sans-serif;
  background: #3252d0;
  color: #fff;

  border-radius: 5%;

  :active {
    background: #112b52;
  }

  ${media.desktop} {
    font: 500 2vw Sora, sans-serif;
  }
`
