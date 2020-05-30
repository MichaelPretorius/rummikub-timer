import styled from 'styled-components';

export const Button = styled.button`
  padding: 0.6rem 1rem;
  border-radius: 3px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0.5em auto;
  font-weight: 600;
  font-size: 1.5rem;
  text-align: center;
  width: 100%;
  color: ${p => p.theme.secondaryColor};
  background: ${p => p.theme.primaryColor};
`;
