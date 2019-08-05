import React, { useState } from "react";
import styled from "styled-components";
import {useTransition} from "react-spring"

import SelectionMenu from "components/Layout/selectionMenu";
import { menuGreen } from "Styled/colors";
import { Link } from "react-router-dom";

export default function MediaSelection(props) {
   const [isHidden, setHidden] = useState(true);
   const seriályLabel = props.lang === 'cs' ? 'seriály' : "tv shows";
   const filmyLabel = props.lang === 'cs' ? 'filmy' : "movies";

   const Transition = useTransition(!isHidden,null,
      {from:{opacity:0, transform:'scaleY(0)'},
      enter: {opacity:1, transform: 'scaleY(1)'},
      leave: {opacity:0, transform:'scaleY(0)'},

   })

   return (
      <div
         onMouseEnter={() => setHidden(false)}
         onMouseLeave={() => setHidden(true)}
      >
         <StyledLink hovered={!isHidden} to={`/${props.mediaType}/discover`}>
            {props.mediaType === "tv" ? seriályLabel : filmyLabel}
         </StyledLink>
         {Transition.map(({item, key, props:styles})=>
            item && (
               <SelectionMenu key={key} lang={props.lang} mediumType={props.mediaType} styles={styles} />
            )
         )}
      </div>
   );
}

const StyledLink = styled(Link)`
   padding: 15px 20px;
   text-decoration: none;
   color: inherit;
   transition: color .3s ease-in, background-color .3s ease-out;
   ${props =>
      props.hovered === true
         ? `
    color: black !important;
    background-color: ${menuGreen};
    `
         : null};
`;
