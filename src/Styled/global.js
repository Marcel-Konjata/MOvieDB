import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 body {min-height: 100vh;
display: flex;
flex-direction: column;

   background: black;
   color: #05ba84;
   code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
         monospace;
   }
   *,
   *::after,
   *::before {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
   }

   h1,
   h2,
   h3 {
      font-family: "Roboto";
   }
}
`;

export default GlobalStyle;
