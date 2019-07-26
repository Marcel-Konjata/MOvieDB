import React, { useState } from "react";
import SelectionMenu from "components/Layout/selectionMenu";
import styled from "styled-components";
import { menuGreen } from "Styled/colors";

export default function MediaSelection(props) {
   const [isHidden, setHidden] = useState(true);
   return (
      <div
         onMouseEnter={() => setHidden(false)}
         onMouseLeave={() => setHidden(true)}
      >
         <StyledLink hovered={!isHidden} >{props.mediaType === 'tv'? 'seriály' : 'filmy'}</StyledLink>
         {isHidden ? null : <SelectionMenu lang="en" mediumType={props.mediaType}/>}
      </div>
   );
}

const StyledLink = styled.a`
 
    padding: 15px 20px;
    text-decoration: none;
    color: inherit;
    ${props => props.hovered ? `
    color: black !important;
    background-color: ${menuGreen};
    ` : ``};
`