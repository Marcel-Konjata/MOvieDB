import React from "react";
import styled from "styled-components";
import Rating from "components/detail/Rating";
import { menuGreen } from "Styled/colors";
import Crew from "./Crew";

function CrewAndRating({ rate, crew, lang = "en" }) {
   return (
      <Wrapper>
         <Crew crew={crew} />
         <RatingWrapper>
            <h4 className="rating-headline">{lang === "en" ? "Rating" : "Hodnocení"}</h4>
            <Rating
               size={230}
               strokeWidth={8}
               rate={rate}
               color={menuGreen}
               textsize={40}
            />
         </RatingWrapper>
      </Wrapper>
   );
}

export default CrewAndRating;

const Wrapper = styled.div`
   display: flex;
   padding: 20px;
   justify-content: space-around;
   align-items: center;
   padding-bottom: 150px;
`;

const RatingWrapper=styled.aside`
display: flex;
align-items: center;
.rating-headline{
    text-transform: uppercase;
    font-family: 'Roboto', sans-serif;
    margin-right: 50px;
    font-size: 2em;
}
`