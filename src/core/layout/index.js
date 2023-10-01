import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '@/core/GlobalStyles';
import { darkColors, theme } from '@/core/theme';

const AppLayout = ({ children }) => {
  const [themeColor, setThemeColor] = useState('light');
  const themeToggler = () => {
    themeColor === 'light' ? setThemeColor('dark') : setThemeColor('light');
  };
  return (
    <ThemeProvider
      theme={
        themeColor === 'light'
          ? { ...theme, colors: { ...theme.colors } }
          : { ...theme, colors: { ...theme.colors, ...darkColors } }
      }
    >
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  );
};
export default AppLayout;
