import {createGlobalStyle} from "styled-components";
import { normalize } from 'styled-normalize';

export const darkBlue: string = "#1F2244"
export const darkGrey: string = "#9C8C8C"
export const green: string = "#119383"
export const orange: string = "#FF5E55"
export const beige: string= "#EDEAE3"

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, Inconsolata, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  h2 {
    font-size: 24px;
    font-weight: bold;
    color: ${darkBlue};
  }

  h3 {
    font-size: 16px;
    color: ${darkBlue};
    font-weight: normal;
  }

  small {
    font-size: 12px;
    color: ${darkGrey}
  }

  p {
    font-size: 16px;
    color: ${darkGrey};
  }
`