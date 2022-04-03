import React from 'react'
import styled from 'styled-components'
import { Close, Storage } from 'styled-icons/material'

export const SelectorContainer = styled.div<{ isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  position: fixed;
  flex-direction: column;
  align-items: left;
  z-index: 10;

  width: 100vw;
  height: calc(100vh - calc(100vh - 100%));
  gap: 1rem;
  /* resize: vertical; */

  background: #fff;
`
export const Header = styled.header`
  display: flex;
  background: #e5e8ef;
  width: 100%;
  padding: 1rem 1rem;
  gap: 2vw;
`

export const CloseButton = styled(Close)`
  width: 6vw;
  color: #5c5b5b;
`

export const Title = styled.h3`
  font: 400 5vw Roboto, sans-serif;
  color: #0f2951;
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
`

export const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3vw;
`

export const CategoryIcon = styled(Storage)`
  width: 6vw;
  color: #909090;
`

export const CategoryLabel = styled.span`
  font: 400 5vw Sora, sans-serif;
  color: #4d4d4d;
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

  overflow-y: scroll;

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
`
export const ResetFilterButton = styled(ApplyFilterButton)`
  background: #fff;
  color: #112b52;
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
`
