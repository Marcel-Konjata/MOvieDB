import React from 'react';
import styled from "styled-components";

function SelectionCard({key, id, name, title, poster_path, vote_average}) {
    return (
        <StyledCard key={key}>
           <figcaption>
            <h3>{name ? `${name} `: `${title} `}</h3>

           </figcaption>
            <img src={`${"https://image.tmdb.org/t/p/"}/w154${poster_path}`} alt=""/>
        </StyledCard>
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