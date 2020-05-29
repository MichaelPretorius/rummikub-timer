import React from 'react';
import styled from 'styled-components';
import { getColor } from '../../styles';

export const Button = styled(
  ({
    small,
    round,
    fill,
    right,
    left,
    sharp,
    color,
    primary,
    secondary,
    error,
    success,
    accent,
    grayScale,
    submit,
    alignSelf,
    flat,
    disabled,
    marginAuto,
    ...rest
  }) => <button type={submit ? 'submit' : 'button'} {...rest} />
)`
  padding: ${({ small }) => (small ? '0.5rem 1rem' : '1rem 2rem')};
  border-radius: ${({ round, sharp }) => (round ? '15px' : sharp ? '0' : '3px')};
  border: none;
  outline: none;
  cursor: pointer;
  margin: ${p => (p.marginAuto ? '1em auto' : '1em 0.5em')};
  font-weight: 600;
  font-size: 0.9rem;
  text-align: center;
  width: ${({ fill }) => (fill ? '100%' : 'auto')};
  color: #fff;
  background: ${props => (props.disabled ? 'rgba(0,0,0,0.2)' : getColor(props))};
  align-self: ${({ alignSelf }) => alignSelf || 'initial'};
  float: ${({ right, left }) => (right ? 'right' : left ? 'left' : null)};
  &:hover {
    transition: 0.15s ease-in-out;
    box-shadow: ${({ flat }) => (flat ? 'none' : '0 6px 12px 0 rgba(0, 0, 0, 0.30)')};
  }
`;

export const FileButton = styled(Button)`
  position: relative;
  text-align: center;
  cursor: pointer;

  & input {
    position: absolute;
    opacity: 0;
    z-index: 2;
    cursor: pointer;
    right: 0;
    top: 0;
    height: 100%;
    width: 100%;
  }
`;
