import React from "react";
import { dataFetch } from "dataFetch";
import SelectionCard from "components/cards/SelectionCard";
import styled from "styled-components";

class ListOfCards extends React.Component {
   state = { data: [], loading: true };

   async componentDidMount() {
      const { media, searchType } = this.props.match.params;
      let response = await dataFetch(media, searchType);
      const data = await response.data;
      this.setState({ data: data, loading: false });
   }
   componentDidUpdate(prevProps) {
      if (prevProps === undefined) {
         return false;
      }
      if (
         prevProps.match.params.media !== this.props.match.params.media ||
         prevProps.match.params.searchType !==
            this.props.match.params.searchType
      ) {
         this.setState({ loading: true, data: [] });
         (async () => {
            const { media, searchType } = this.props.match.params;
            let response = await dataFetch(media, searchType);
            const data = await response.data;
            this.setState({ data: data, loading: false });
         })();
      }
   }

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
               <CardGrid>{this.updateCards()}</CardGrid>
            )}
         </section>
      );
   }
}

export default ListOfCards;

const CardGrid = styled.div`
   display: grid;
   grid-template: auto;
`;
