import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: 'Cyber';
    src: url('/Blender-Pro-Bold.otf') format('otf'); /* ajuste o nome do arquivo e o formato da fonte */
  }

  *{
    scroll-behavior: smooth;
    margin:0px;
    padding:0px;
    box-sizing: border-box;

  }
 
  input, button{
    cursor: pointer;
  }

  body{
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #888 #f1f1f1;
    
    input::-ms-reveal,
      input::-ms-clear {
        display: none;
      }
  }


`;