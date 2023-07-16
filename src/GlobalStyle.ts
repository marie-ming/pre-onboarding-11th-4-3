import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  ul,li {
    list-style: none;
  }

  a{
    text-decoration: none;
  }

  button, input {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    font: inherit;
  }

  input {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
