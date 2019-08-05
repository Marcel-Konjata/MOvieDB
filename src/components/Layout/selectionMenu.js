import React from "react";
import styled from "styled-components";
import {animated} from "react-spring";

import { menuGreen } from "Styled/colors";
import { Link } from "react-router-dom";



function SelectionMenu({ lang = "cs", mediumType, styles }) {
  


   if (lang === "cs") {
      return mediumType === "tv" ? (
         <StyledSelect style={{...styles, transformOrigin:'top',}}>
            <ul>
               <li>
                  <Link to={`/${mediumType}/popular`}>oblibene</Link>
               </li>
               <li>
                  <Link to={`/${mediumType}/top_rated`}>nejlepe hodnocene</Link>
               </li>
               <span>
                  <li>
                     <Link to={`/${mediumType}/on_the_air`}>prave v TV</Link>
                  </li>
                  <li>
                     <Link to={`/${mediumType}/airing_today`}>
                        vysila se dnes
                     </Link>
                  </li>
               </span>
            </ul>
         </StyledSelect>
      ) : (
         <StyledSelect style={{...styles, transformOrigin:'top',}}>
            <ul>
               <li>
                  <Link to={`/${mediumType}/popular`}>oblibene</Link>{" "}
               </li>
               <li>
                  <Link to={`/${mediumType}/top_rated`}>nejlepe hodnocene</Link>{" "}
               </li>
               <span>
                  <li>
                     <Link to={`/${mediumType}/now_playing`}>
                        prave v kinech
                     </Link>{" "}
                  </li>
                  <li>
                     <Link to={`/${mediumType}/upcoming`}>vyjde</Link>
                  </li>
               </span>
            </ul>
         </StyledSelect>
      );
   }
   if (lang === "en") {
      return mediumType === "tv" ? (
         <StyledSelect style={{...styles, transformOrigin:'top',}}>
            <ul>
               <li>
                  <Link to={`/${mediumType}/popular`}>popular </Link>
               </li>
               <li>
                  <Link to={`/${mediumType}/top_rated`}>top rated </Link>
               </li>
               <span>
                  <li>
                     <Link to={`/${mediumType}/on_the_air`}>on air </Link>
                  </li>
                  <li>
                     <Link to={`/${mediumType}/airing_today`}>
                        airing today
                     </Link>
                  </li>
               </span>
            </ul>
         </StyledSelect>
      ) : (
         <StyledSelect style={{...styles, transformOrigin:'top',}}>
            <ul>
               <li>
                  <Link to={`/${mediumType}/popular`}>popular</Link>{" "}
               </li>
               <li>
                  <Link to={`/${mediumType}/top_rated`}>top rated </Link>
               </li>
               <span>
                  <li>
                     <Link to={`/${mediumType}/now_playing`}>in cinemas </Link>
                  </li>
                  <li>
                     <Link to={`/${mediumType}/upcoming`}>upcoming</Link>
                  </li>
               </span>
            </ul>
         </StyledSelect>
      );
   }
}

export default SelectionMenu;

const StyledSelect = styled(animated.div)`
   position: absolute;
   bottom: -126px;
   padding: 10px;
   left: 0;
   width: 290px;
   z-index: 2;
   background-color: #252525;
   border: ${menuGreen} 1px solid;
   color: ${menuGreen};

   ul {
      list-style: none;
   }
   li {
      font-weight: 400;
      cursor: pointer;
      padding: 5px;
      display: block;
   }
   span {
      display: flex;
      justify-content: space-between;
   }
`;
