import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
   *::after,
   *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }
 html,body {height: 100%;
;
#root{
   display: flex;
flex-direction: column;
justify-content: space-between;
min-height: 100%;
   main{
      flex-grow:1;
      position:relative;
      min-height: 80vh;
      overflow: hidden;
   }
   header, main, footer{
      flex-shrink: 0
   }
}
   background: black;
   color: #05ba84;
   code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
         monospace;
   }
   

   h1,
   h2,
   h3 {
      font-family: "Roboto";
   }
}
a{ color: inherit;
text-decoration: none;}
`;

export default GlobalStyle;
