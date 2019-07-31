import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getRecomended } from "dataFetch";
import generateRandomIndexes from "utilities/randomGenerator";

export default class RecomendedCard extends Component {
   state = { cardlist: [], loading: true };
   async componentDidMount() {
      const { media, detailID } = this.props;
      const response = await getRecomended(media, detailID);
      const data = response.data.results;
      this.setState({ cardlist: data, loading: false });
   }
   renderCards = () => {
      const { cardlist } = this.state;
      const randomRecomend = generateRandomIndexes(cardlist, 4);
      return randomRecomend.map(index => (
         <Card key={cardlist[index]}>
            <Link to={`/${this.props.media}/detail/${cardlist[index].id}`}>
               <img
                  src={`${"https://image.tmdb.org/t/p/"}/w154${
                     cardlist[index].poster_path
                  }`}
                  alt={
                     cardlist[index].name
                        ? `${cardlist[index].name} `
                        : `${cardlist[index].title} `
                  }
               />
            </Link>
         </Card>
      ));
   };

   render() {
      return (
         <FlexBox>
            {this.state.loading ? (
               "loading"
            ) : (
               <React.Fragment>
                  <h2 className="recomendation-title">Recomendations</h2>
                  <Recomendations>{this.renderCards()}</Recomendations>
               </React.Fragment>
            )}
         </FlexBox>
      );
   }
}

const FlexBox = styled.div`
   flex-basis: 50%;
   .recomendation-title{
       text-align: center;
       margin-bottom: 20px;
   }
`;
const Recomendations = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`;

const Card = styled.div`
   margin: 5px;
   width: 140px;
   img {
      width: 100%;
      border: 1px solid black;
   }
`;
