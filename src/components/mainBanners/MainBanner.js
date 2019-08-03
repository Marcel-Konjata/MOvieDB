import React, { Component } from "react";
import { TVFetch, movieFetch } from "../../dataFetch";
import { RandomIndexes } from "../../utilities";
import BannerCard from "./BannerCard";
import { Localization } from "components/context/LanguageContext";

class MainBanner extends Component {
   state = {
      randomShowsToDisplay: [],
      loading: true
   };

   async componentDidMount() {
      let response =
         this.props.fetch === "tv"
            ? await TVFetch("popular")
            : await movieFetch("now_playing");
      let results = response.data.results;

      //get 3 random ids for display
      const ids = RandomIndexes(results, 3);
      // each id will be use to add object to state with same index
      ids.map(id => {
         return this.setState(prevState => {
            const newItem = prevState.randomShowsToDisplay.concat(results[id]);
            return { randomShowsToDisplay: newItem };
         });
      });
      this.setState({ loading: false });
   }

   render() {
      return (
         <Localization>
            {({ language }) => (
               <React.Fragment>
                  {this.state.loading
                     ? "loading"
                     : this.state.randomShowsToDisplay.map((item, number) => (
                          <BannerCard
                             key={item.id}
                             medium={this.props.fetch}
                             {...item}
                             number={number}
                             lang={language}
                          />
                       ))}
               </React.Fragment>
            )}
         </Localization>
      );
   }
}

export default MainBanner;
