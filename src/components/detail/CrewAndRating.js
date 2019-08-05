import React from "react";
import styled from "styled-components";
import Rating from "components/detail/Rating";
import { menuGreen } from "Styled/colors";
import Crew from "./Crew";
import { Transition } from "react-spring/renderprops";

class CrewAndRating extends React.Component {
   state = { scrolledIntoView: false };

   rateLine = React.createRef();

   componentDidMount() {
      window.addEventListener("scroll", this.handleWindowScroll);
   }
   componentWillUnmount() {
      window.removeEventListener("scroll", this.handleWindowScroll);
   }
   //basically what I need is get position of rectangle and innerheight
   handleWindowScroll = () => {
      const rect = this.rateLine.current.getBoundingClientRect().top;
      let windowPos = window.innerHeight / 1.5;

      if (windowPos > rect) {
         // to prevent repeated state update for nothing - wasting of performance
         // conditional with prevstate is needed
         this.setState(prevState => {
            if (prevState.scrolledIntoView !== true) {
               return { scrolledIntoView: true };
            }
         });
      }
   };

   render() {
      const { rate, crew, lang = "en" } = this.props;

      return (
         <Wrapper ref={this.rateLine}>
            <Crew crew={crew} />
            <RatingWrapper>
               <Transition
                  items={this.state.scrolledIntoView}
                  from={{ opacity: 0 }}
                  enter={{ opacity: 1 }}
                  leave={{ opacity:0 }}
                  config={{ duration: 600 }}
               >
                  {show => show && (styles => (
                        <>
                           <h4 className="rating-headline">
                              {lang === "en" ? "Rating" : "Hodnocení"}
                           </h4>
                           <Rating
                           styled={styles}
                              size={230}
                              strokeWidth={8}
                              rate={rate}
                              color={menuGreen}
                              textsize={40}
                           />
                        </>
                     ))
                  }
               </Transition>
            </RatingWrapper>
         </Wrapper>
      );
   }
}

export default CrewAndRating;

const Wrapper = styled.div`
   display: flex;
   padding: 20px;
   justify-content: space-around;
   align-items: center;
   padding-bottom: 150px;
   @media (max-width: 914px) {
      flex-direction: column;
   }
`;

const RatingWrapper = styled.aside`
   display: flex;
   align-items: center;
   flex-basis: 30%;
   @media (max-width: 1090px) {
      flex-direction: column;
   }
   @media (max-width: 914px) {
      order: -1;
      margin-bottom: 30px;
      flex-basis: 100%;
   }

   .rating-headline {
      text-transform: uppercase;
      font-family: "Roboto", sans-serif;
      margin-right: 50px;
      font-size: 2em;
      @media (max-width: 1090px) {
         margin: 0 auto 20px;
      }
   }
`;
