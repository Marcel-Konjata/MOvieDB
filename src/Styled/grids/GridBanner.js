import styled from "styled-components";

export const GridBanner = styled.div`
   display: grid;

   width: 550px;
   padding: 30px;
   border: 2px solid #05BA84;
   position: relative;   
   
   grid-template-rows: auto;
   grid-template-columns: 1fr 1fr;
   grid-gap: 5px;

   ${({right})=> right && `
   padding-left: 2px;
   
   border-left:none;
   `}

   ${({left})=> left && `
   padding-right: 2px;
   
   border-right:none;
   `}


   ${({ reverse }) =>
      reverse === true
         ? `
   .main {
     grid-row: 1;
     grid-column: 1/-1;
  }
  .small {
     grid-row: 2;
  }
 
   `
         : `.main {
         grid-row: 2;
         grid-column: 1/-1;
      }
      .small {
         grid-row: 1;
      }`}
`;
