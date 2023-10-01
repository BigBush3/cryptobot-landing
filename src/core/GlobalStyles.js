import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
      margin: 0;
      font-family: Inter;
      background: ${({ theme }) => theme.body};
      color: ${({ theme }) => theme.primary};
      transition: all 0.50s linear;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      
    }
  }
  p {
    margin-block-start:0;
    margin-block-end:0;
  }
`;

export default GlobalStyle;
