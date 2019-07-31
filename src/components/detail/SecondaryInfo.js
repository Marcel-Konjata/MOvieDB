import React from "react";
import styled from "styled-components";
import triangle from "./../../img/Subtract.png";
import { getCredits } from "dataFetch";
import CastCard from "components/cards/CastCard";
import CrewAndRating from "./CrewAndRating";

class SecondaryInfo extends React.Component {
   state = { data: [], loading: true };

   async componentDidMount() {
      const { media, id } = this.props;
      const response = await getCredits(media, id);
      const data = response.data;

      this.setState({ data, loading: false });
   }
   componentDidUpdate(prevProps) {
      if (prevProps.id !== this.props.id) {
         this.setState({ data: [], loading: true });
         (async () => {
            const { media, id } = this.props;
            const response = await getCredits(media, id);
            const data = response.data;

            this.setState({ data, loading: false });
         })();
      }
   }

   renderCast = () => {
      return this.state.data.cast.map((item, id) => {
         if (id < 5) return <CastCard {...item} key={item.id} />;
         else return null;
      });
   };

   render() {
      return (
         <>
            <SectionWrapper>
               <TransitionImg>
                  <img src={triangle} alt="transition" />
               </TransitionImg>
               <h2 className="cast">Cast</h2>
               <CardWrapper>
                  {this.state.loading
                     ? "loading component here"
                     : this.renderCast()}
               </CardWrapper>
            </SectionWrapper>
            <CrewAndRating rate={this.props.rate} crew={this.state.data.crew} />
         </>
      );
   }
}

export default SecondaryInfo;

const SectionWrapper = styled.section`
   padding: 200px 50px;
   max-width: 1200px;
   margin: 0 auto;
   position: relative;
   .cast {
      text-align: center;
      text-transform: uppercase;
      margin-bottom: 40px;
      font-size: 38px;
   }
`;
const TransitionImg = styled.div`
   position: absolute;
   top: -85px;
   left: 0;
`;

const CardWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;
`;
