import styled from 'styled-components'
import { PlusSquareOutline } from 'styled-icons/evaicons-outline'
import { CategorySelector } from '../../components/CategorySelector/CategorySelector'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vw;
`

export const AddButtonContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  width: min-content;
  height: min-content;
`
export const AddCategorySelector = styled(CategorySelector)`
  position: absolute;
  z-index: 1;
  top: 50px;
  left: 5px;
`

export const AddButton = styled(PlusSquareOutline)`
  color: #fff;
  width: 50px;
  height: 50px;
`
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
