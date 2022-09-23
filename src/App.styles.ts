import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
  :root {
    --black: #000000;
    --font-sans: "Source Sans Pro", Georgia, Times, serif;
    --white: #FFFFFF;
  }
  html,
  body {
    background: var(--white);
    font-family: var(--font-sans);
    margin: 0;
  }
  h1 {
    color: #353535;
    font-size: 30px;
  }
  h2 {
    color: #454545;
    font-size: 25px;
    margin-top: 0;
  }
  h3 {
    font-size: 20px;
  }
  h4 {
    color: #505050;
  }
  h5 {
    color: #656565;
    letter-spacing: 0.5px;
  }
  p {
    color: #757575;
    font-size: 16px;
    line-height: 25px;
  }
`;

export default GlobalStyle;
