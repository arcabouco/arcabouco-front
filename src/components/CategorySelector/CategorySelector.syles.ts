import React from 'react'
import styled from 'styled-components'
import { Tag } from '../../api/interfaces/Tag'
import { TagCategory } from '../../api/interfaces/TagCategory'

export const SelectorContainer = styled.div<{ isOpened: boolean }>`
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  flex-direction: column;
  align-items: left;

  width: 15rem;
  height: 60vh;
  max-height: 25rem;
  gap: 1rem;
  padding: 1rem 1rem 1rem;
  border-radius: 0.5rem;

  background: #eeeeee;
`
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: left;
  min-height: 3rem;
`

export const Title = styled.h3``

export const SubTitle = styled.h4<{ selectedCategory: TagCategory }>`
  display: ${({ selectedCategory }) =>
    selectedCategory.id ? 'block' : 'none'};
  color: #313131;
  font-size: 1rem;
`

type CategoryProps = {
  selectedCategory: TagCategory
} & React.HTMLAttributes<HTMLUListElement>

export const Categories = styled.ul<CategoryProps>`
  display: ${props => (props.selectedCategory.id ? 'none' : 'flex')};
  flex-direction: column;
  width: 100%;
  padding-right: 0.8rem;

  gap: 0.8rem;
  overflow: scroll;

  list-style-type: none;
`

export const Category = styled.button`
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  height: 2.3rem;
  width: 100%;

  font: 400 1.4rem Roboto;
  border: 1px solid #313131;
  color: #313131;
  background: #bdffdb;
  border-radius: 0.4rem;
`

type TagsProps = {
  selectedCategory: TagCategory
} & React.HTMLAttributes<HTMLUListElement>

export const Tags = styled.div<TagsProps>`
  display: ${props => (props.selectedCategory.id ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  padding-right: 0.8rem;

  gap: 0.8rem;
  overflow: scroll;
`

export const TagLabel = styled.label`
  display: flex;
  align-items: center;
  height: 2.3rem;
  max-height: 2.3rem;
  max-width: 100%;
  padding-right: 10%;

  font: 400 1.4rem Roboto;
  gap: 0.3rem;
  color: #313131;

  white-space: nowrap;
`

export const TagCheckBox = styled.input`
  min-height: 1.2rem;
  min-width: 1.2rem;
`
export const Footer = styled.footer`
  display: flex;
  justify-content: right;
  min-height: 2.4rem;
  padding: 0 1rem;
  width: 100%;
`

type DoneButtonProps = {
  selectedTags: Tag[]
}

export const DoneButton = styled.button<DoneButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => (props.selectedTags.length ? '#73E760' : '#DBDBDB')};
  min-height: 100%;
  width: 5rem;
  color: ${props => (props.selectedTags.length ? '#313131' : '#B8B8B8')};
  font: 400 1rem Roboto;
  border-radius: 0.6rem;
  border: 1px solid
    ${props => (props.selectedTags.length ? '#313131' : '#B8B8B8')};
`
