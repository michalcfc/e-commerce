import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *, *:before, *:after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-size: 1rem;
    }
    body {
      background: ${({ theme }) => theme.background};
      color: ${({ theme }) => theme.text};
    };
    ul {
      list-style: none;
      padding: 0;
    }
  `