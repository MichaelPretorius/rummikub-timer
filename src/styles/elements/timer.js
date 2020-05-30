import styled from 'styled-components';
import { Wrapper } from './utils';

export const TimerContainer = styled(Wrapper)`
  color: ${p => p.theme.primaryColor};
  font-size: 8rem;
  border: 2px solid ${p => p.theme.primaryColor};
  border-radius: 50%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;
