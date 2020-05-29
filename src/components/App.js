import React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../styles/globalStyles';
import theme from '../styles/theme';
import Timer from './Timer';
import { Container, Wrapper, RummiImg } from '../styles';
import rummikub from '../assets/rummikub.png'

function App() {
  return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Container fill>
				<Wrapper alignCenter height="90vh">
        <RummiImg src={rummikub} alt="rummikub" />
					<Wrapper justifyCenter>
            <Timer />
          </Wrapper>
				</Wrapper>
			</Container>
		</ThemeProvider>
	);
}

export default App;
