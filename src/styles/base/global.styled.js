import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.background};
    margin: 0;
    padding: 0;
    transition: all 0.1s;
  }
`;

export default GlobalStyles;
