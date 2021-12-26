import { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Rocket } from 'styled-icons/ionicons-outline'

import Atom from '../../assets/atom.svg'

export const Container = styled.div`
  display: flex;
  width: 85%;
  min-height: 18rem;

  position: relative;

  overflow-x: scroll;

  scroll-snap-type: both mandatory;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  ::-webkit-scrollbar:horizontal {
    height: 12px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    border: 2px solid #ffffff;
    min-width: 1px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 20px;
    background-color: #ffffff;
  }
`

export const FakeCard = styled.div`
  background: transparent;
  min-width: 100%;
  min-height: 100%;
  scroll-snap-align: start;
  z-index: 1;
  pointer-events: none;
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  background: transparent;
  height: 13rem;
  max-width: 85%;

  position: fixed;
  left: inherit;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: #e5e8ef;

  width: 10rem;
  height: 100%;
  border-radius: 0.8rem;
  padding: 8% 1rem 6% 1rem;

  transition: transform 0.1s;
`

export const AtomIcon = styled(Atom)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #a9b6d2;
  pointer-events: none;
`

export const RocketIcon = styled(Rocket)`
  width: 1.9rem;
  height: 1.9rem;
  color: #a9b6d2;
  pointer-events: none;
`

export const Description = styled.span`
  width: 100%;
  pointer-events: none;

  font: 400 0.9rem Roboto, sans-serif;
  color: #646566;

  line-height: 1.25rem;
  letter-spacing: 0.02em;
`

type ButtonProps = {
  scroll: number
} & HTMLAttributes<HTMLButtonElement>

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 1.8rem;
  border-radius: 1.5rem;

  font: 700 0.8rem Roboto, sans-serif;
  color: #fff;
  background: ${props => (Math.round(props.scroll) ? '#3252d0' : '#C5D3FF')};
  box-shadow: ${props =>
    Math.round(props.scroll)
      ? '0px 0.25rem 0.5rem rgba(16, 24, 64, 0.16);'
      : 'none'};

  cursor: ${props => (Math.round(props.scroll) ? 'pointer' : 'default')};
  pointer-events: ${props => (Math.round(props.scroll) ? 'default' : 'none')};

  transition: background 0.5s, box-shadow 0.5s;
`
