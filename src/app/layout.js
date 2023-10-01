'use client';
import React, { useState } from 'react';
import { Inter } from 'next/font/google';
import GlobalStyles from '@/core/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { darkColors, theme } from '@/core/theme';
import useDarkMode from '';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  const [themeColor, setThemeColor] = useState('light');
  const darkmode = useDarkMode(true);
  const themeToggler = () => {
    themeColor === 'light' ? setThemeColor('dark') : setThemeColor('light');
  };
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        themeToggler: themeToggler,
      });
    });
  };
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          theme={
            themeColor === 'light'
              ? { ...theme, colors: { ...theme.colors }, isDark: false }
              : {
                  ...theme,
                  colors: { ...theme.colors, ...darkColors },
                  isDark: true,
                }
          }
        >
          <GlobalStyles />
          {renderChildren()}
        </ThemeProvider>
      </body>
    </html>
  );
}
