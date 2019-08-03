import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Circle from "./ProgressCircle";


function SelectionCard({ id, name, title, poster_path, vote_average,media }) {
   return poster_path ? (
      <StyledCard>
         <figcaption>
            <h3>{media === 'tv' ? `${name} ` : `${title} `}</h3>
            <Circle size={50} rate={vote_average*10} strokeWidth={3}/>
         </figcaption>
         <Link to={`/${media}/detail/${id}`}><img
            src={`${"https://image.tmdb.org/t/p/"}/w154${poster_path}`}
            alt={name ? `${name} ` : `${title} `}
         /></Link>
      </StyledCard>
   ) : null;
}

export default SelectionCard;

const StyledCard = styled.figure`
   figcaption {
      display: flex;
      justify-content: space-between;
      margin-bottom:10px;
      align-items: center;
      h3 {
         font-size: 16px;
         max-width: 120px;

      }
   }
`;

