import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
  body {
    margin: 0;
    padding: 0;
    color: #1d1d1d;
    font-family: Nunito, Open-Sans, Helvetica, Sans-Serif;
    width: 100%;
    height: 100vh;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
