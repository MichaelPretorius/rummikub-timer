import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/globalStyles';
import theme from '../styles/theme';
import Timer from './Timer';
import { Container, Wrapper, RummiImg } from '../styles';
import rummikub from '../assets/images/rummikub.png';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container fill fillHeight>
        <Wrapper alignCenter height="100%" justifyBetween>
          <RummiImg src={rummikub} alt="rummikub" />
          <Timer />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
