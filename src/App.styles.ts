import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');
  :root {
    --black: #000000;
    --white: #FFFFFF;
    --yellow: #FFAA00;
    --grey: #F8F8F8;
    --lightGrey: #E7E7E7;
    --font-sans: "Source Sans Pro", Georgia, Times, serif;
  }
  html,
  body {
    background: var(--white);
    font-family: var(--font-sans);
    margin: 0;
  }
  h1 {
    color: #353535;
    font-size: 1.875rem;
  }
  h2 {
    color: #454545;
    font-size: 1.563rem;
    margin-top: 0;
  }
  h3 {
    font-size: 1.25rem;
  }
  h4 {
    color: #505050;
  }
  h5 {
    color: #656565;
    letter-spacing: 0.031rem;
  }
  p {
    color: #757575;
    font-size: 1rem;
    line-height: 1.563rem;
  }
`;

export default GlobalStyle;
