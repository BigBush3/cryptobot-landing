import { css } from 'styled-components';
import { BREAKPOINTS } from '@/core/helpers';

const emSize = (pixelValue) => `${pixelValue / 16}em`;

export const getCurrentBreakpoint = () => {
  const { innerWidth } = window;
  if (innerWidth <= BREAKPOINTS['sm']) {
    return 'xs';
  } else if (
    innerWidth >= BREAKPOINTS['sm'] &&
    innerWidth < BREAKPOINTS['md']
  ) {
    return 'sm';
  } else if (
    innerWidth >= BREAKPOINTS['md'] &&
    innerWidth < BREAKPOINTS['lg']
  ) {
    return 'md';
  } else if (innerWidth >= BREAKPOINTS['lg']) {
    return 'lg';
  }
};

export const getSizeFromBreakpoint = (breakpointValue) => {
  if (BREAKPOINTS[breakpointValue]) {
    return emSize(BREAKPOINTS[breakpointValue]);
  } else if (parseInt(breakpointValue, 10)) {
    return emSize(BREAKPOINTS[breakpointValue]);
  }
  console.error(
    'styled-media-query: No valid breakpoint or size specified for media.'
  );
  return '0';
};

export const min =
  (breakpoint) =>
  (...args) =>
    css`
      @media (min-width: ${getSizeFromBreakpoint(breakpoint, BREAKPOINTS)}) {
        ${css(...args)};
      }
    `;

export const max =
  (breakpoint) =>
  (...args) =>
    css`
      @media (max-width: ${getSizeFromBreakpoint(breakpoint, BREAKPOINTS)}) {
        ${css(...args)};
      }
    `;

export const between =
  (firstBreakpoint, secondBreakpoint) =>
  (...args) =>
    css`
      @media (min-width: ${getSizeFromBreakpoint(
          firstBreakpoint,
          BREAKPOINTS
        )}) and (max-width: ${getSizeFromBreakpoint(
          secondBreakpoint,
          BREAKPOINTS
        )}) {
        ${css(...args)};
      }
    `;

export const media = { min, max, between };
