import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getRecomended } from "dataFetch";

import { Localization } from "components/context/LanguageContext";

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
     
      return cardlist.map((item,index) => (
         index < 4 ?
         <Card key={item.id}>
            <Link to={`/${this.props.media}/detail/${item.id}`}>
               <img
                  src={`${"https://image.tmdb.org/t/p/"}/w154${
                     item.poster_path
                  }`}
                  alt={
                     item.name
                        ? `${item.name} `
                        : `${item.title} `
                  }
               />
            </Link>
         </Card> : null
      ));
   };

   render() {
      return (
         <FlexBox>
            {this.state.loading ? (
               "loading"
            ) : (
               <Localization>
                 {({language})=>(
                  <React.Fragment>
                     <h2 className="recomendation-title">{language === 'en'? 'Recommendations':'Doporučené'}</h2>
                      <Recomendations>
                        {this.state.cardlist.length>0?
                        this.renderCards()
                        :<h2>
                           {language==='en'? 'there is not recommendations to this one yet': 'zatím zde nejsou doporučení k tomuto detailu'}
                        </h2>}
                     </Recomendations>
               </React.Fragment>
                 )} 
               </Localization>
             
            )}
         </FlexBox>
      );
   }
}

const FlexBox = styled.div`
   flex-basis: 50%;
   @media (max-width: 591px) {
      flex-basis: 100%;
   }
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
