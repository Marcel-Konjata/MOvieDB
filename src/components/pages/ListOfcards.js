import React from "react";
import { dataFetch } from "dataFetch";
import SelectionCard from "components/cards/SelectionCard";
import styled from "styled-components";
import PageNumbers from "components/cards/pageNumbers";

class ListOfCards extends React.Component {
   state = { data: [], loading: true, activePage: 1 };

   async componentDidMount() {
      const { media, searchType } = this.props.match.params;
      let response = await dataFetch(
         media,
         searchType,
         "en",
         this.state.activePage
      );
      const data = await response.data;
      this.setState({ data: data, loading: false });
   }

   // did update is necessary to change state after clicking on diferrent link passing new params
   componentDidUpdate(prevProps, prevState) {
      if (prevProps === undefined) {
         return false;
      }
      if (
         prevProps.match.params.media !== this.props.match.params.media ||
         prevProps.match.params.searchType !==
            this.props.match.params.searchType
      ) {
         //reset state to original value, loading is necessary data are not
         this.setState({ loading: true, data: [], activePage: 1 });
         // then refetch data based on new criterias
         (async () => {
            const { media, searchType } = this.props.match.params;
            let response = await dataFetch(
               media,
               searchType,
               "en",
               this.state.activePage
            );
            const data = await response.data;
            this.setState({ data: data, loading: false });
         })();
      }
      if (this.state.activePage !== prevState.activePage) {
         (async () => {
            const { media, searchType } = this.props.match.params;
            let response = await dataFetch(
               media,
               searchType,
               "en",
               this.state.activePage
            );
            const data = await response.data;
            this.setState({ data: data, loading: false });
         })();
      }
   }
   // this function renders all card gained from fetch
   updateCards = () =>
      this.state.data.results.map(item => {
         return <SelectionCard {...item} key={item.id} media={this.props.match.params.media} />;
      });

   handlePageNumber = numberToSet => {
      this.setState({ activePage: numberToSet });
   };

   render() {
      
      return (
         <section>
            <h1>{this.props.match.params.media}</h1>
            <p>{this.props.match.params.searchType}</p>
            {this.state.loading ? (
               "loading component will be there"
            ) : (
               <React.Fragment>
                  {this.props.match.params.searchType !== "discover" && (
                     <PageNumbers
                        pages={this.state.data.total_pages}
                        activePage={this.state.activePage}
                        setPage={this.handlePageNumber}
                     />
                  )}
                  <CardGrid>{this.updateCards()}</CardGrid>
                  {this.props.match.params.searchType !== "discover" && (
                     <PageNumbers
                        pages={this.state.data.total_pages}
                        activePage={this.state.activePage}
                        setPage={this.handlePageNumber}
                     />
                  )}
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
   min-height: 900px;
   margin: 50px auto 100px;
   display: grid;
   row-gap: 50px;
   justify-items: center;
   align-items: center;
   grid-template-columns: repeat(5, auto);
`;
