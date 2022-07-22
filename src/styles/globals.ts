import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  ::-webkit-scrollbar {
    display: none;
  }
  
  html,
  body {
   display: flex;
   min-height: 100vh;
   flex-direction: column;
   padding: 0;
   margin: 0;
   background: lightgray;
   font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
   Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  * {
    box-sizing: border-box;
  }`;

export default GlobalStyle;
