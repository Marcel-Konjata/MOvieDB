import React from "react";
import {animated} from "react-spring/renderprops"

import Banners from "Styled/grids/Banners";
import { GridBanner } from "Styled/grids/GridBanner";
import { DescriptionForBanner } from "Styled";
import { MainBanner } from "components/mainBanners";
import styled from "styled-components";
import { Localization } from "components/context/LanguageContext";

function HomePage(props) {
   return (
      <Localization>
         {({ language }) => (
            <IntroSection style={props.style}>
               <Banners>
                  <GridBanner reverse left>
                     <DescriptionForBanner>
                        <h2>{language ==='cs'?'Popularni seriály' : 'Popular series'}</h2>
                     </DescriptionForBanner>
                     <MainBanner fetch="tv" />
                  </GridBanner>
                  <GridBanner right>
                     <DescriptionForBanner>
                        <h2>{language ==='cs'?'Právě v kinech' : 'At Cinema'}</h2>
                     </DescriptionForBanner>
                     <MainBanner fetch="movie" />
                  </GridBanner>
               </Banners>
            </IntroSection>
         )}
      </Localization>
   );
}

export default HomePage;

const IntroSection = styled(animated.section)`
   margin-top: 120px;
   margin-bottom: 150px;
   @media (max-width:590px) {
      padding: 0 10px;
   }
   @media (max-width:534px) {
      h2{
         font-size: 30px;
      }
   }
   @media (max-width:461px) {
      h2{
         font-size: 25px;
      }
   }
`;
