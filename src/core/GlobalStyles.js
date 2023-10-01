import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
      margin: 0;
      font-family: Inter;
      background: ${(p) => p.theme.colors.body};
      color: ${(p) => p.theme.colors.primary};
      transition: all 0.50s linear;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
    }
  }
  p {
    margin-block-start:0px;
    margin-block-end:0px;
  }
`;

export default GlobalStyles;
