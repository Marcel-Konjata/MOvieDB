import React, { Fragment } from "react";
import Banners from "Styled/grids/Banners";
import { GridBanner } from "Styled/grids/GridBanner";
import { DescriptionForBanner } from "Styled";
import { MainBanner } from "components/mainBanners";

function HomePage(props) {
   return (
      <Fragment>
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
      </Fragment>
   );
}

export default HomePage;
