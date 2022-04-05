import styled from 'styled-components'
import { Add } from 'styled-icons/material'

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
`

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`

export const AddCategoryButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 2rem;
  background: #d9d9d9;
  border-radius: 0.5rem;
  cursor: pointer;
  :active {
    background: #c9c9c9;
  }
`

export const AddCategoryIcon = styled(Add)`
  height: 70%;
`

export const CategoryName = styled.span`
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
