import React, { useState } from "react";
import SelectionMenu from "components/Layout/selectionMenu";
import styled from "styled-components";
import { menuGreen } from "Styled/colors";
import { Link } from "react-router-dom";

export default function MediaSelection(props) {
   const [isHidden, setHidden] = useState(true);
   const seriályLabel = props.lang === 'cs' ? 'seriály' : "tv shows";
   const filmyLabel = props.lang === 'cs' ? 'filmy' : "movies";

   return (
      <div
         onMouseEnter={() => setHidden(false)}
         onMouseLeave={() => setHidden(true)}
      >
         <StyledLink hovered={!isHidden} to={`/${props.mediaType}/discover`}>
            {props.mediaType === "tv" ? seriályLabel : filmyLabel}
         </StyledLink>
         {!isHidden && (
            <SelectionMenu lang={props.lang} mediumType={props.mediaType} />
         )}
      </div>
   );
}

const StyledLink = styled(Link)`
   padding: 15px 20px;
   text-decoration: none;
   color: inherit;
   ${props =>
      props.hovered === true
         ? `
    color: black !important;
    background-color: ${menuGreen};
    `
         : null};
`;
