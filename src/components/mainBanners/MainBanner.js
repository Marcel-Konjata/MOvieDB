import React, { Component } from "react";
import { TVFetch, movieFetch } from "../../dataFetch";
import { Random3Indexes } from "../../utilities";
import BannerCard from "./BannerCard";

class MainBanner extends Component {
   state = {
      randomShowsToDisplay: [],
      loading: true
   };

   async componentDidMount() {
      let response = this.props.fetch === "tv" ?  await TVFetch("popular") : await movieFetch("now_playing") ;
      let results = response.data.results;

      //get 3 random ids for display
      const ids = Random3Indexes(results);
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
      console.log(this.state.randomShowsToDisplay);
      return (
         <React.Fragment>
            {this.state.loading
               ? "loading"
               : this.state.randomShowsToDisplay.map((item,number) => (
                    <BannerCard key={item.id} medium={this.props.fetch} {...item} number={number} />
                 ))}
         </React.Fragment>
      );
   }
}

export default MainBanner;
