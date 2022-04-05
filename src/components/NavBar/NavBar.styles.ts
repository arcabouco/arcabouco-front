import { HTMLProps } from 'react'
import styled from 'styled-components'
import { Logout, Person } from 'styled-icons/material'
import { media } from '../../utils/css'

export const NavBarContainer = styled.div`
  display: none;
  justify-content: space-around;
  align-items: center;
  background: #0d264f;
  height: 15vh;
  width: 100%;
  z-index: 100;

  ${media.desktop} {
    display: flex;
  }
`

export const Title = styled.span`
  font: 400 1.4vw Nazegul, sans-serif;
  color: white;
`

export const MenuContainer = styled.div`
  display: flex;
  gap: 4vw;
`

interface MenuButtonProps extends HTMLProps<HTMLButtonElement> {
  selected: boolean
}

export const MenuButton = styled.button<MenuButtonProps>`
  font: 500 1.2vw Roboto, sans-serif;
  color: ${props => (props.selected ? '#2FC863' : '#fff')};

  cursor: pointer;
`
export const AuthOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`

export const GenericButton = styled.button`
  border: 1px solid white;
  border-radius: 0.5rem;
  color: #fff;
  padding: 0.5rem 1rem;
  width: 100%;
  transition: all 0.5s;
  font: 400 0.9vw Roboto, sans-serif;
  cursor: pointer;

  :active {
    background: #fff;
  }
`

export const ProfilePhoto = styled(Person)`
  width: 3vw;
  border-radius: 50%;
  background: #fff;
  padding: 0.2vw;
  cursor: pointer;
`

export const ProfileOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 0.5vw;
  background: #fff;
  border-radius: 0.5vw;
`

export const ProfileOptionButton = styled.button`
  border: 1px solid #0d264f;
  border-radius: 0.5rem;
  color: #0d264f;
  padding: 0.5rem 1rem;
  width: 100%;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  font: 400 0.7vw Roboto, sans-serif;

  :active {
    background: #c5d3ff;
  }
`

export const LogoutButton = styled.button`
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  transition: all 0.5s;
  color: #8695a0;
  cursor: pointer;

  :active {
    color: #fff;
  }
`

export const LogoutLabel = styled.span`
  font-size: 1rem;
`

export const LogoutIcon = styled(Logout)`
  width: 1.2rem;
`
