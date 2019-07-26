import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Layout from "./components/Layout";

import GlobalStyle from "Styled/global";
import HomePage from "components/pages/HomePage";

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
               <div>
               <GlobalStyle />
                  <Layout>
                     <Route exact path="/" component={HomePage} />
                     <Route path="/tv/:searchType" component={HomePage} />
                     <Route path="/movie/:searchType" component={HomePage} />
                     <Route path="/tv/:id" component={HomePage} />
                     <Route path="/movie/:id" component={HomePage} />
                  </Layout>
               </div>
           
         </BrowserRouter>
      );
   }
}

export default App;
