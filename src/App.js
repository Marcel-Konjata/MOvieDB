import React from "react";
import Layout from "./components/Layout";
import { MainBanner } from "./components/mainBanners";
import AppWrapper from "Styled/global";
import { GridBanner } from "Styled/grids/GridBanner";
import Banners from "./Styled/grids/Banners";
import { DescriptionForBanner } from "Styled";
class App extends React.Component {
   // this is pre written style of data fetching for elemnts containing movie bd info
   // async componentDidMount(){
   //   const response = await popularTVFetch('tv/popular','cs');
   //  let data = response.data;
   //   console.log(data);
   // }

   render() {
      return (
         <AppWrapper>
            <Layout>
               <Banners>
                  <GridBanner reverse left>
                     <DescriptionForBanner>
                        <h2>Popularni serialy</h2>
                     </DescriptionForBanner>
                     <MainBanner fetch="tv" />
                  </GridBanner>
                  <GridBanner right>
                     <DescriptionForBanner>
                        <h2>Pr8v2 v kinech</h2>
                     </DescriptionForBanner>
                     <MainBanner fetch="movie" />
                  </GridBanner>
               </Banners>
            </Layout>
         </AppWrapper>
      );
   }
}

export default App;
