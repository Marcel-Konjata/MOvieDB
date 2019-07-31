import React from "react";
import styled from "styled-components";
import RecomendedCard from "components/cards/RecomendedCard";
import TrailerCard from "components/cards/TrailerCard";

function TrailerAndRecomend({ detailID, media, thumb }) {
   return (
      <StyledSection>
         <TrailerCard detailID={detailID} thumb={thumb} />
         <RecomendedCard detailID={detailID} media={media}/>
      </StyledSection>
   );
}

export default TrailerAndRecomend;

const StyledSection = styled.section`
   background: white;
   padding: 100px 10px;
   display: flex;
   flex-wrap: wrap;
`;
