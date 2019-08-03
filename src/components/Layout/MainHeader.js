import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "Styled/elements";
import { MediaSelection, LanguageSelection } from "components/navigations";
import styled from "styled-components";
import { Localization } from "components/context/LanguageContext";

// at bottom are CSS components

const MainHeader = () => {
   return (
      <StyledHeader>
         <h1 className="logo">
            <Link to="/">MOVIE DB</Link>{" "}
         </h1>
         <Wrapper>
            <div className="navigations">
               <Navigation>
                  <Localization>
                     {({language}) => (
                        <>
                           <MediaSelection mediaType="movie" lang={language} />
                           <MediaSelection mediaType="tv" lang={language} />
                        </>
                     )}
                  </Localization>
               </Navigation>
               <Navigation>
                  <LanguageSelection />
               </Navigation>
            </div>
         </Wrapper>
      </StyledHeader>
   );
};

export default MainHeader;

// CSS STyles

const StyledHeader = styled.header`
   .logo {
      font-family: "Russo One", sans-serif;
      padding: 25px;
      text-align: center;
      font-weight: 400;
   }
   .navigations {
      background: linear-gradient(
         90.25deg,
         #010101 22.85%,
         #05ba84 50.69%,
         #000000 73.26%
      );
      padding: 10px;
      font-family: "Roboto", sans-serif;
      display: flex;
      align-items: center;
      color: white;

      font-size: 18px;
      font-weight: bold;
      justify-content: space-between;
   }
`;

const Navigation = styled.nav`
   display: flex;
   align-items: center;
   position: relative;
`;
