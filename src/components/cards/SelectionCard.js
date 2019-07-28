import React from 'react';
import styled from "styled-components";

function SelectionCard({id, name, title, poster_path, vote_average}) {
    return (
        poster_path ? 
        <StyledCard>
           <figcaption>
            <h3>{name ? `${name} `: `${title} `}</h3>

           </figcaption>
            <img src={`${"https://image.tmdb.org/t/p/"}/w154${poster_path}`} alt=""/>
        </StyledCard> : null
    )
}

export default SelectionCard


const StyledCard = styled.figure`
    figcaption{
      display: flex;
      justify-content: space-between;
      h3{
          font-size:16px;
          max-width: 120px;
          
      }
    }

`;