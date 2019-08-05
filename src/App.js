import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Transition } from "react-spring/renderprops";

import Layout from "./components/Layout";
import GlobalStyle from "Styled/global";
import HomePage from "components/pages/HomePage";
import ListOfCards from "components/pages/ListOfcards";
import DetailInfo from "components/pages/DetailInfo";
import SearchResults from "components/pages/SearchResults";
import { LangProvider, Localization } from "components/context/LanguageContext";

function App() {
   return (
      <LangProvider>
         <BrowserRouter>
            <Route
               render={({ location}) => (
                  <>
                     <GlobalStyle />
                     <Layout>
                        <Localization>
                           {({ language }) => (
                              <Transition
                                 native
                                 items={location}
                                 keys={location.pathname}
                                 from={{
                                    transform: "translate3d(100%,0,0)",
                                    position: "absolute",
                                    opacity: 0
                                 }}
                                 enter={{
                                    transform: "translate3d(0,0,0)",
                                    position: "relative",
                                    opacity: 1
                                 }}
                                 leave={{
                                    transform: "translate3d(-100%,0,0)",
                                    position: "absolute",
                                    opacity: 0
                                 }}
                                 config={{mass: 17, tension: 70, friction: 48}}
                              >
                                 {item => styles => (
                                    <Switch location={item}>
                                       <Route
                                          exact
                                          path="/"
                                          render={props => (
                                             <HomePage
                                                {...props}
                                                style={styles}
                                             />
                                          )}
                                       />
                                       <Route
                                          exact
                                          path="/search/results/get/:keyword"
                                          render={props=>(<SearchResults {...props} styled={styles} />) }
                                       />
                                       <Route
                                          exact
                                          path="/:media/:searchType"
                                          render={props => (
                                             <ListOfCards
                                                {...props}
                                                lang={language}
                                                style={styles}
                                             />
                                          )}
                                       />
                                       <Route
                                          exact
                                          path="/:media/detail/:id"
                                          render={props => (
                                             <DetailInfo
                                                {...props}
                                                lang={language}
                                                style={styles}
                                             />
                                          )}
                                       />
                                    </Switch>
                                 )}
                              </Transition>
                           )}
                        </Localization>
                     </Layout>
                  </>
               )}
            />
         </BrowserRouter>
      </LangProvider>
   );
}

export default App;
