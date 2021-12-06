import { HTMLProps } from 'react'
import styled from 'styled-components'

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;

  width: 100%;
  margin-top: 3rem;
`

interface NavBarButtonProps extends HTMLProps<HTMLButtonElement> {
  selected: boolean
}

export const NavBarButton = styled.button<NavBarButtonProps>`
  background-color: transparent;

  text-decoration: ${props => (props.selected ? 'underline' : 'none')};

  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: 36px;

  cursor: pointer;
`
