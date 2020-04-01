import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.background};
    height: 100%;
    margin: 0;
    padding: 0;
    width: 100%;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyles;
