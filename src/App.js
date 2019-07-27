import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";

import GlobalStyle from "Styled/global";
import HomePage from "components/pages/HomePage";
import ListOfCards from "components/pages/ListOfcards";
import DetailInfo from "components/pages/DetailInfo";
import SearchResults from "components/pages/SearchResults";

class App extends React.Component {
   // this is pre written style of data fetching for elemnts containing movie bd info
   // async componentDidMount(){
   //   const response = await popularTVFetch('tv/popular','cs');
   //  let data = response.data;
   //   console.log(data);
   // }

   render() {
      return (
         <BrowserRouter>
            <>
               <GlobalStyle />
               <Layout>
                  <Switch>
                     <Route exact path="/" component={HomePage} />
                     <Route  path="/:media/:searchType" render={props => <ListOfCards {...props} />} />
                     <Route path="/:media/detail/:id" component={DetailInfo} />
                     <Route path="/search/:keyword" component={SearchResults} />
                  </Switch>
               </Layout>
            </>
         </BrowserRouter>
      );
   }
}

export default App;
