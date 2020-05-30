import React from 'react';
import styled, { css } from 'styled-components';

export const getColor = (
  { color, primary, secondary, accent, grayScale, theme },
  defaultColor
) => {
  if (color) return color;
  if (primary) return theme.primaryColor;
  if (secondary) return theme.secondaryColor;
  if (accent) return theme.accentColor;
  if (grayScale) return theme.grayScaleColor;
  return defaultColor || theme.grayScaleColor;
};

export const getPosition = ({ center, right, left }, defaultPosition) => {
  if (center) return 'center';
  if (right) return 'right';
  if (left) return 'left';
  if (defaultPosition) return defaultPosition;
  return 'left';
};

export const getFlexJustify = (
  {
    justifyStart,
    justifyEnd,
    justifyAround,
    justifyBetween,
    justifyEvenly,
    justifyCenter,
  },
  defaultPosition
) => {
  if (justifyStart) return 'flex-start';
  if (justifyEnd) return 'flex-end';
  if (justifyAround) return 'space-around';
  if (justifyBetween) return 'space-between';
  if (justifyEvenly) return 'space-evenly';
  if (justifyCenter) return 'center';
  if (defaultPosition) return defaultPosition;
  return 'flex-start';
};

export const getFlexAlign = (
  { alignStart, alignEnd, alignBaseline, alignCenter, alignStretch },
  defaultPosition
) => {
  if (alignStart) return 'flex-start';
  if (alignEnd) return 'flex-end';
  if (alignCenter) return 'center';
  if (alignBaseline) return 'baseline';
  if (alignStretch) return 'stretch';
  if (defaultPosition) return defaultPosition;
  return 'stretch';
};

const sizes = {
  // below xxs for smaller i-phone 7 phones
  xxs: 385,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

export const above = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const below = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const Container = styled(({ fill, fillHeight, ...rest }) => (
  <div {...rest} />
))`
  max-width: ${({ fill }) => (fill ? '100%' : '1140px')};
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  height: ${({ fillHeight }) => (fillHeight ? '100vh' : 'auto')};
`;

export const PagesContainer = styled(({ ...rest }) => <div {...rest} />)`
  margin: 0 auto;
  padding-top: 86px;
  ${below.md`
    padding-top: 70px;
  `};
`;

export const Wrapper = styled(
  ({
    justifyStart,
    justifyEnd,
    justifyAround,
    justifyBetween,
    justifyEvenly,
    justifyCenter,
    alignStart,
    alignEnd,
    alignBaseline,
    alignCenter,
    alignStretch,
    width,
    height,
    row,
    wrap,
    ...rest
  }) => <div {...rest} />
)`
  display: flex;
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '100%'};
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  justify-content: ${props => getFlexJustify(props)};
  align-items: ${props => getFlexAlign(props)};
  flex-wrap: ${({ wrap }) => (wrap ? 'wrap' : null)};
  flex-basis: ${({ basis }) => basis || null};
  position: relative;
`;
