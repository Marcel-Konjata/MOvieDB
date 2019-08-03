import React from "react";
import styled from "styled-components";
import { HeaderButton, MenuArrow } from "Styled/elements/Buttons";
import { menuGreen } from "Styled/colors";
import { Localization } from "components/context/LanguageContext";

function LanguageSelection() {
   const [show, Toggle] = React.useState(false);
   return (
      <Localization>
         {({ language, changeLang }) => (
            <React.Fragment>
               <p>{language === 'cs'?'jazyk':'lang'}</p>
               <HeaderButton
                  className={show ? "active" : ""}
                  onClick={() => Toggle(!show)}
               >
                  {language.toUpperCase()}
               </HeaderButton>
               {!show ? null : (
                  <>
                     <MenuArrow />
                     <SelectList>
                        <li
                           id="cs"
                           onClick={event => {
                              Toggle(!show);

                              changeLang(event.target.id);
                           }}
                        >
                           čeština
                        </li>
                        <li
                           id="en"
                           onClick={event => {
                              Toggle(!show);

                              changeLang(event.target.id);
                           }}
                        >
                           English
                        </li>
                     </SelectList>
                  </>
               )}
            </React.Fragment>
         )}
      </Localization>
   );
}

export default LanguageSelection;

const SelectList = styled.ul`
   list-style: none;
   position: absolute;
   top: 64px;
   left: 5px;
   border: 2px solid ${menuGreen};
   color: ${menuGreen};

   z-index: 2;
   background: black;
   li {
      padding: 5px 20px;
      font-weight: 400;
      transition: all 0.3s ease-in;
      cursor: pointer;
      &:hover {
         color: black;
         background: ${menuGreen};
      }
   }
`;
