import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'KCC-Ganpan';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/KCC-Ganpan.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
* {
  font-family: "KCC-Ganpan";
}

&::-webkit-scrollbar {
    width: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
  }

body {
  font-family: 'KCC-Ganpan';
}

a {
  color: inherit;
  text-decoration: none;
}


`;

export default GlobalStyle;
