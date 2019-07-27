import React from "react";
import { dataFetch } from "dataFetch";
import SelectionCard from "components/cards/SelectionCard";
import styled from "styled-components";
import PageNumbers from "components/cards/pageNumbers";

class ListOfCards extends React.Component {
   state = { data: [], loading: true };

   async componentDidMount() {
      const { media, searchType } = this.props.match.params;
      let response = await dataFetch(media, searchType);
      const data = await response.data;
      this.setState({ data: data, loading: false });
   }

   // did update is necessary to change state after clicking on diferrent link passing new params
   componentDidUpdate(prevProps) {
      if (prevProps === undefined) {
         return false;
      }
      if (
         prevProps.match.params.media !== this.props.match.params.media ||
         prevProps.match.params.searchType !==
            this.props.match.params.searchType
      ) {
         //reset state to original value, loading is necessary data are not
         this.setState({ loading: true, data: [] });
         (async () => {
            const { media, searchType } = this.props.match.params;
            let response = await dataFetch(media, searchType);
            const data = await response.data;
            this.setState({ data: data, loading: false });
         })();
      }
   }
   // this function renders all card gained from fetch
   updateCards = () =>
      this.state.data.results.map(item => {
         return <SelectionCard {...item} key={item.id} />;
      });

   render() {
      return (
         <section>
            <h1>{this.props.match.params.media}</h1>
            <p>{this.props.match.params.searchType}</p>
            {this.state.loading ? (
               "loading component will be there"
            ) : (
               <React.Fragment>
                  <CardGrid>{this.updateCards()}</CardGrid>
                  <PageNumbers pages={this.state.data.total_pages} />
               </React.Fragment>
            )}
         </section>
      );
   }
}

// CSS styled component
export default ListOfCards;

const CardGrid = styled.div`
   max-width: 1000px;
   margin: 0 auto;
   display: grid;
   justify-items: center;
   align-items: end;
   grid-template-columns: repeat(5, auto);
`;
