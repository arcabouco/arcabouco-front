import { ComponentType } from 'react'
import styled from 'styled-components'
import { Logout, Person } from 'styled-icons/material'

export const Container = styled.div<{ opened: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background: #000;
  opacity: ${props => (props.opened ? '0.7' : '0')};
  pointer-events: ${props => (props.opened ? 'auto' : 'none')};
  display: ${props => (props.opened ? 'block' : 'none')};
`

export const Bar = styled.nav<{ opened: boolean }>`
  position: fixed;
  background: #fff;
  width: 65vw;
  max-width: 16rem;
  height: 100vh;
  left: ${props => (props.opened ? '0' : '-100%')};
  /* background: red; */

  z-index: 101;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  background: #122c52;
  /* height: 10rem; */
  padding: 1rem 1rem;
  width: 100%;
`

export const LogoutButton = styled.button`
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
  transition: all 0.5s;
  color: #8695a0;

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

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const UserImage = styled(Person)`
  width: 3rem;
  color: #fff;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const UserName = styled.h2`
  font: 500 1rem Roboto, sans-serif;
  color: #fff;
`

export const UserEmail = styled.span`
  font: 400 0.8rem Roboto, sans-serif;
  color: #fff;
`

export const GenericButton = styled.button`
  border: 1px solid white;
  border-radius: 0.5rem;
  color: #fff;
  padding: 0.5rem 1rem;
  width: 100%;
  transition: all 0.5s;

  :active {
    background: #fff;
  }
`

export const LogoutInfo = styled.span`
  color: #fff;
  font: 400 0.8rem Sora, sans-serif;
  text-align: center;
`

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  padding: 1.2rem 1.2rem;
`

export const MenuItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`

export const MenuItemIconStyle = (c: ComponentType) => styled(c)<{
  selected: boolean
}>`
  width: 2rem;
  color: ${props => (props.selected ? '#122c52' : '#8695a0')};
`

export const MenuItemLabel = styled.div<{ selected: boolean }>`
  font: 400 1.1rem Roboto, sans-serif;
  color: ${props => (props.selected ? '#122c52' : '#8695a0')};
`
