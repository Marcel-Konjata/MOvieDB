import styled from "styled-components";

const Banners = styled.div`
   display: flex;
   justify-content: center;
   @media (max-width:1120px) {
      flex-direction: column;
      align-items:center;
   }
`;

export default Banners;
