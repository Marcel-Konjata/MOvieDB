import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout";

import GlobalStyle from "Styled/global";
import HomePage from "components/pages/HomePage";
import ListOfCards from "components/pages/ListOfcards";
import DetailInfo from "components/pages/DetailInfo";
import SearchResults from "components/pages/SearchResults";
import { LangProvider, Localization } from "components/context/LanguageContext";

class App extends React.Component {
   // this is pre written style of data fetching for elemnts containing movie bd info
   // async componentDidMount(){
   //   const response = await popularTVFetch('tv/popular','cs');
   //  let data = response.data;
   //   console.log(data);
   // }

   render() {
      return (
         <LangProvider>
            <BrowserRouter>
               <>
                  <GlobalStyle />
                  <Layout>
                     <Localization>
                        {({ language }) => (
                           <Switch>
                              <Route exact path="/" component={HomePage} />
                              <Route
                                 exact
                                 path="/search/results/get/:keyword"
                                 component={SearchResults}
                              />
                              <Route
                                 exact
                                 path="/:media/:searchType"
                                 render={props => <ListOfCards {...props} lang={language}/>}
                              />
                              <Route
                                 exact
                                 path="/:media/detail/:id"
                                 render={props => (
                                    <DetailInfo {...props} lang={language} />
                                 )}
                              />
                           </Switch>
                        )}
                     </Localization>
                  </Layout>
               </>
            </BrowserRouter>
         </LangProvider>
      );
   }
}

export default App;
