import { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Rocket } from 'styled-icons/ionicons-outline'
import Atom from '../../assets/atom.svg'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;
  max-height: 20rem;
`

export const ScrollContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;

  position: absolute;

  overflow-x: scroll;

  scroll-snap-type: both mandatory;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  /* ::-webkit-scrollbar:horizontal {
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
  } */
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
  align-items: flex-start;
  gap: 7%;

  background: transparent;
  height: 100% !important;
  width: 100%;

  /* position: absolute; */
  /* top: 0.1vh; */
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15%;

  background: #e5e8ef;

  width: 38%;
  height: 80%;
  border-radius: 0.8rem;
  padding: 8% 1rem 6% 1rem;

  transition: transform 0.1s;
  /* right: 10rem; */
`

export const AtomIcon = styled(Atom)`
  width: min-content;
  height: 25%;

  path {
    fill: #a9b6d2;
  }
`

export const RocketIcon = styled(Rocket)`
  width: min-content;
  height: 25%;
  color: #a9b6d2;
  pointer-events: none;
`

export const Description = styled.span`
  width: 100%;
  pointer-events: none;

  font: 400 3.8vw Roboto, sans-serif;
  color: #646566;

  line-height: 5vw;
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
  height: 5vh;
  border-radius: 1.5rem;

  font: 700 1.8vh Roboto, sans-serif;
  color: #fff;

  background: ${props => (Math.round(props.scroll) ? '#C5D3FF' : '#3252d0')};
  box-shadow: ${props =>
    Math.round(props.scroll)
      ? 'none'
      : '0px 0.25rem 0.5rem rgba(16, 24, 64, 0.16);'};

  cursor: ${props => (Math.round(props.scroll) ? 'default' : 'pointer')};
  pointer-events: ${props => (Math.round(props.scroll) ? 'none' : 'default')};

  transition: background 0.5s, box-shadow 0.5s;
`
