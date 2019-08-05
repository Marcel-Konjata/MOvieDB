import React from "react";
import styled from "styled-components";
import {animated} from "react-spring/renderprops"


import { getDetails, IMAGE_BASEURL } from "dataFetch";
import { mainGreen } from "Styled/colors";
import MainInfo from "components/detail/MainInfo";
import SecondaryInfo from "components/detail/SecondaryInfo";
import TrailerAndRecomend from "components/detail/TrailerAndRecomend";
import { ScrollToTopOnMount } from "utilities/ScrollTopOnMount";

class DetailInfo extends React.Component {
   state = { data: [], loading: true };

   async componentDidMount() {
      const { media, id } = this.props.match.params;
      const result = await getDetails(media, id, this.props.lang);
      const data = result.data;

      this.setState({ data, loading: false });
   }
   componentDidUpdate(prevProps) {
      if (prevProps.match.params.id !== this.props.match.params.id || this.props.lang!==prevProps.lang) {
         this.setState({ data: [], loading: true });
         (async () => {
            const { media, id } = this.props.match.params;
            const result = await getDetails(media, id, this.props.lang);
            const data = result.data;

            this.setState({ data, loading: false });
         })();
      }
   }

   render() {
      const {
         backdrop_path,
         poster_path,
         name,
         title,
         overview,
         vote_average
      } = this.state.data;
      const image = backdrop_path
         ? `${IMAGE_BASEURL}/w1280/${backdrop_path}`
         : null;
      return (
         <animated.section style={{opacity: this.props.style.opacity, position:this.props.style.position , width: '100%'}}>
            <ScrollToTopOnMount />
            {this.state.loading === false ? (
               <React.Fragment>
                  <Poster image={image} />
                  <FlexWrapper>
                     <PosterCard>
                        <img
                           src={`${IMAGE_BASEURL}/w342${poster_path}`}
                           alt={name ? name : title}
                        />
                     </PosterCard>
                     <MainInfo info={overview} title={name ? name : title} />
                  </FlexWrapper>
                  <SecondaryInfo
                     id={this.props.match.params.id}
                     media={this.props.match.params.media}
                     rate={vote_average * 10}
                  />

                  <TrailerAndRecomend
                     detailID={this.props.match.params.id}
                     media={this.props.match.params.media}
                     thumb={backdrop_path}
                  />
               </React.Fragment>
            ) : (
               "loading component will be here"
            )}
         </animated.section>
      );
   }
}

export default DetailInfo;

const Poster = styled.div`
   background: ${props =>
         props.image
            ? `url("${props.image}")
`
            : `url("https://images.unsplash.com/photo-1542204625-ca960ca44635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")`}
      no-repeat;
   height: 400px;
   background-attachment: fixed;
   background-size: cover;
   background-position: top;
`;

const PosterCard = styled.figure`
   width: 230px;
   min-width: 180px;
   max-height: 360px;
   margin-top: -200px;
   margin-left: 15%;
   img {
      display: block;
      border: 5px solid ${mainGreen};
      width: 100%;

      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.5);
   }
`;

const FlexWrapper = styled.div`
   padding: 80px 20px 120px;
   @media (max-width:839px) {
      flex-direction: column;
   }

   display: flex;
   justify-content: center;
   background: white;
`;
