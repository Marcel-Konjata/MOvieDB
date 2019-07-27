import React from "react";
import Banners from "Styled/grids/Banners";
import { GridBanner } from "Styled/grids/GridBanner";
import { DescriptionForBanner } from "Styled";
import { MainBanner } from "components/mainBanners";
import styled from "styled-components";

function HomePage(props) {
   return (
      <IntroSection>
         <Banners>
            <GridBanner reverse left>
               <DescriptionForBanner>
                  <h2>Popularni serialy</h2>
               </DescriptionForBanner>
               <MainBanner fetch="tv" />
            </GridBanner>
            <GridBanner right>
               <DescriptionForBanner>
                  <h2>Právě v kinech</h2>
               </DescriptionForBanner>
               <MainBanner fetch="movie" />
            </GridBanner>
         </Banners>
      </IntroSection>
   );
}

export default HomePage;

const IntroSection = styled.section`
margin-top: 120px;
margin-bottom: 150px;
`;