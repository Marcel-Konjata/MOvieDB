import styled from "styled-components";

export const Grid1_2 = styled.div`
   display: grid;
   grid-template-rows: 2fr 1fr;
   grid-template-columns: 1fr 1fr;
   .main {
      grid-row: 1;
      grid-column: 1/-1;
   }
   .small {
      grid-row: 2;
   }
`;
