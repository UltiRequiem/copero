import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
  
  html,
  body {
    padding: 0;
    margin: 0;
    background: lightgray;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  li{
    list-style: none;
    display:inline-block;
  }
  
  * {
    box-sizing: border-box;
  }`;

export default GlobalStyle;