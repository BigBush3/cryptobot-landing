import {
  min,
  max,
  between,
  getCurrentBreakpoint,
} from '@/core/responsiveUtils';

export const defaultColors = {
  body: '#FFF',
  primary: '#0D0D12',
  secondary: '#41A4DF',
  background: '#232328',
  blue: {
    light: 'rgba(41, 126, 226, 0.12)',
    primary: '#41A4DF',
    regular: '#297EE2',
    dark: '#232328',
  },
  white: '#FFF',
};
export const darkColors = {
  body: '#18181D',
  primary: '#FFF',
  secondary: '#41A4DF',
  background: '#18181D',
};

export const theme = {
  colors: {
    ...defaultColors,
  },
  general: {
    gridSize: 12,
    gridGap: '12px',
    borderRadius: '5px',
    mobilePadding: '20px',
    borderWidth: '1px',
    headerHeight: '60px',
    menuShift: '52px',
    opacity: '1',
    modalBackdropColor: 'rgba(0, 0, 0, .8)',
    overlayColor: 'rgba(30, 30, 30, .85)',
    containerWidth: {
      md: '980px',
      lg: '1188px',
    },
  },
  spaces: {
    base: 1,
  },
  min,
  max,
  between,
  getCurrentBreakpoint,
};
