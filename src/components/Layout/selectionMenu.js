import React from "react";
import styled from "styled-components";
import { menuGreen } from "Styled/colors";


function SelectionMenu({lang ="cs", mediumType}) {
   if (lang === "cs") {
      return (
         mediumType === 'tv' ?
      
         <StyledSelect>
            <ul>
               <li>oblibene </li>
               <li>nejlepe hodnocene </li>
               <span>
                  <li>prave v TV</li>
                  <li>vysila se dnes</li>
               </span>
            </ul>
         </StyledSelect> : 
         <StyledSelect>
            <ul>
               <li>oblibene </li>
               <li>nejlepe hodnocene </li>
               <span>
                  <li>prave v kinech </li>
                  <li>vyjde</li>
               </span>
            </ul>
         </StyledSelect>

      
      );
   }
   if (lang === "en") {
      return (
         mediumType === 'tv' ?
         <StyledSelect>
            <ul>
               <li>popular </li>
               <li>top rated </li>
               <span>
                  <li> on air </li>
                  <li>airing today</li>
               </span>
            </ul>
         </StyledSelect> :
         <StyledSelect>
            <ul>
               <li>popular </li>
               <li>top rated </li>
               <span>
                  <li> in cinemas </li>
                  <li>upcoming</li>
               </span>
            </ul>
         </StyledSelect> 

      );
   }
}

export default SelectionMenu;

const StyledSelect = styled.div`
    position: absolute;
    bottom:-106px;
    padding: 15px;
    left: 0;
    width: 290px;
    z-index: 2;
    background-color: #252525;
    border: ${menuGreen} 1px solid;
    ul{list-style: none;}
    
   span{
       display: flex;
       justify-content: space-between;
    }
`;