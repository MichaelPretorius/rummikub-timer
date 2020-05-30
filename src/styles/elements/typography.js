import styled from 'styled-components';
import { getPosition, getColor } from './utils';

export const Display = styled.h1`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-size: ${({ font }) => font || '2rem'};
  font-weight: 500;
`;

export const Header = styled.h2`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-size: ${({ font }) => font || '1.8rem'};
  font-weight: 600;
`;

export const Title = styled.h3`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-size: ${({ font }) => font || '1.5rem'};
  font-weight: 600;
`;

export const Headline = styled.h4`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-size: ${({ font }) => font || '1.2rem'};
  font-weight: ${({ weight }) => weight || '500'};
`;

export const Body = styled.p`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-size: ${({ font }) => font || '1rem'};
`;

export const Caption = styled(Body)`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props, props.theme.lightScaleColor)};
  font-size: ${({ font }) => font || '0.8rem'};
  font-weight: 300;
`;

export const BreadCrumb = styled(Body)`
  text-align: ${props => getPosition(props)};
  color: ${props => getColor(props)};
  font-size: ${({ font }) => font || '0.8rem'};
  margin: 0;
`;
