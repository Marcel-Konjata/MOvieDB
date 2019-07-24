import React from "react";
import { popularTVFetch } from "./dataFetch";
import Layout from "./components/Layout";
class App extends React.Component {
   state = {
      popularTV: []
   };

   // async componentDidMount(){
   //   const response = await popularTVFetch('tv/popular','cs');
   //  let data = response.data;
   //   console.log(data);
   // }

   render() {
      console.log(this.state.popularTV);
      return (
         <div className="App">
            <Layout>
               <TVBanner />
               <MovieBanner />
            </Layout>
         </div>
      );
   }
}

export default App;
