import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px;
  }

  button {
    border: none;
    background: transparent;
    color: unset;
  }

  @font-face {
    font-family: Nazegul;
    src: url("/fonts/Nazegul-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

`
