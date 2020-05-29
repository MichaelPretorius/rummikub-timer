import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600&display=swap');

  html {
    height: 100%;
    width: 100%;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    line-height: 1.3;
  }

  body {
    padding: 0;
    margin: 0;
    background: ${p => p.theme.secondaryColor}
  }

  a {
    text-decoration: none;
  }

  ul {
    margin: 0 auto;
    list-style-type: none;
  }

  * {
    box-sizing: border-box;
  }
`;
