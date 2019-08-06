import React from "react";
import { dataFetch } from "dataFetch";
import SelectionCard from "components/cards/SelectionCard";
import styled from "styled-components";
import PageNumbers from "components/cards/pageNumbers";
import SelectionTitle from "components/SelectionTitle";
import { animated, Trail } from "react-spring/renderprops";


class ListOfCards extends React.Component {
   state = { data: [], loading: true, activePage: "1" };

   async componentDidMount() {
      const { media, searchType } = this.props.match.params;
      let response = await dataFetch(
         media,
         searchType,
         this.props.lang,
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
            this.props.match.params.searchType ||
         this.props.lang !== prevProps.lang
      ) {
         //reset state to original value, loading is necessary data are not
         this.setState({ loading: true, data: [] });
         // then refetch data based on new criterias
         (async () => {
            const { media, searchType } = this.props.match.params;
            let response = await dataFetch(
               media,
               searchType,
               this.props.lang,
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
               this.props.lang,
               this.state.activePage
            );
            const data = await response.data;
            this.setState({ data: data, loading: false });
         })();
      }
   }
   

   handlePageNumber = numberToSet => {
      this.setState({ activePage: numberToSet });
   };

   AnimatedCardRender = () => {
      let Cards = this.state.data.results;
      return (
         <Trail
            items={Cards}
            keys={Card => Card.id}
            from={{
              
               opacity: 0,
               transform: "translate3d(30%,10%,0)"
            }}
            to={{
              
               opacity: 1,
               transform: "translate3d(0,0%,0%)"
            }}
         >
            {item => props => (
               <div style={props} className="grid-wrap">
                  <SelectionCard
                     {...item}
                     media={this.props.match.params.media}
                  />
               </div>
            )}
         </Trail>
      );
   };

   

   render() {
      
      return (
         <animated.section style={{ ...this.props.style }}>
         
            <PageTitle>
               <SelectionTitle
                  media={this.props.match.params.media}
                  searchType={this.props.match.params.searchType}
                  lang={this.props.lang}
               />
            </PageTitle>
            {this.state.loading ? (
               "loading..."
            ) : (
               <React.Fragment>
                  {this.props.match.params.searchType !== "discover" && (
                     <PageNumbers
                        pages={this.state.data.total_pages}
                        activePage={this.state.activePage}
                        setPage={this.handlePageNumber}
                     />
                  )}
                  <CardGrid>{this.AnimatedCardRender()}</CardGrid>
                  {this.props.match.params.searchType !== "discover" && (
                     <PageNumbers
                        pages={this.state.data.total_pages}
                        activePage={this.state.activePage}
                        setPage={this.handlePageNumber}
                     />
                  )}
               </React.Fragment>
            )}
         </animated.section>
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
   @media (max-width: 918px) {
      grid-template-columns: repeat(4, auto);
   }
   @media (max-width: 678px) {
      grid-template-columns: repeat(3, auto);
   }
   @media (max-width: 515px) {
      grid-template-columns: repeat(2, auto);
   }
`;

const PageTitle = styled.div`
   max-width: 1200px;
   margin: 50px auto 20px;
   h1 {
      text-transform: capitalize;
      font-size: 30px;
   }
`;
