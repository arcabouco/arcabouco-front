import styled from 'styled-components'

export const Container = styled.nav<{ opened: boolean }>`
  position: fixed;
  background: #fff;
  width: 70%;
  max-width: 14rem;
  height: 100vh;
  left: ${props => (props.opened ? '0' : '-100%')};

  z-index: 100;
  transition: all 0.3s ease;

  padding: 2rem 2rem 0rem;
`
export const Title = styled.h3`
  display: flex;
  color: #363636;
  font-size: 1.6rem;
`

export const Menu = styled.ul`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 2.5rem;
`

export const MenuItem = styled.li<{ selected: boolean }>`
  :first-of-type {
    border-top: 0.07rem solid #363636;
  }

  width: 95%;
  padding: 1rem 0;
  border-bottom: 0.07rem solid #363636;

  list-style: none;
  color: #121212;
  text-align: center;

  text-decoration: ${props => (props.selected ? 'underline' : 'none')};
`
