import { HTMLAttributes } from 'react'
import styled from 'styled-components'

import { Rocket } from 'styled-icons/ionicons-outline'
import Atom from '../../assets/atom.svg'
import { media } from '../../utils/css'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 100%;
  height: 100%;
  max-height: 20rem;

  ${media.desktop} {
    max-height: 20vw;
  }
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
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 6vw;

  background: transparent;
  height: 100% !important;
  width: 100%;
`

type CardProps = {
  scroll: number
} & HTMLAttributes<HTMLDivElement>

export const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  background: #e5e8ef;

  width: 40vw;
  height: 80%;
  max-width: 150px;
  border-radius: 0.8rem;
  padding: 0 min(3vw, 10px);
  margin: 0 3vw;

  transition: transform 0.1s;

  cursor: ${props => (Math.round(props.scroll) ? 'default' : 'pointer')};

  ${media.desktop} {
    max-width: unset;
    width: 22vh;
    height: 30vh;

    padding: 1vw 0.8vw;
    margin: 0 2vw;
  }
`

export const AtomIcon = styled(Atom)`
  width: auto;
  height: 15%;

  path {
    fill: #a9b6d2;
  }

  ${media.desktop} {
    height: 35%;
    width: 35%;
  }
`

export const RocketIcon = styled(Rocket)`
  width: auto;
  height: 15%;
  color: #a9b6d2;
  pointer-events: none;

  ${media.desktop} {
    height: 35%;
    width: 35%;
  }
`

export const Description = styled.span`
  width: 100%;
  pointer-events: none;

  font: 400 85% Roboto, sans-serif;
  color: #646566;

  line-height: 130%;
  letter-spacing: 0.02em;

  ${media.desktop} {
    font: 400 2vh Roboto, sans-serif;
  }
`

type ButtonProps = {
  scroll: number
} & HTMLAttributes<HTMLButtonElement>

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 14%;
  border-radius: 1.5rem;

  font: 700 90% Roboto, sans-serif;
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
