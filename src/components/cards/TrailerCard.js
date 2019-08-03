import React, { Component } from "react";
import styled from "styled-components";
import smallPin from "img/smallpin.png";
import bigPin from "img/bigpin.png";

import { getTrailer } from "dataFetch";
import VideoFrame from "./VideoFrame";

export default class TrailerCard extends Component {
   state = { videoKey: "" };

   async componentDidMount() {
      const { media, detailID } = this.props;
      const resolve = await getTrailer(media, detailID);

      // verify if the response has some values necessary for render
      if (resolve.data.results.length > 0) {
         this.setState({ videoKey: resolve.data.results[0].key });
      }
   }

   render() {
      return (
         this.state.videoKey && (
            <Container>
               <div className="video-thumb">
                  <div className="smallpin">
                     <img src={smallPin} alt="smallpin" />
                  </div>
                  <div className="bigpin">
                     <img src={bigPin} alt="bigpin" />
                  </div>
                  <VideoFrame
                     className="videoframe"
                     thumb={this.props.thumb}
                     videoKey={this.state.videoKey}
                  />
               </div>
            </Container>
         )
      );
   }
}
const Container = styled.div`
   flex-basis: 50%;
   position: relative;
   margin-bottom: 150px;
   @media (max-width: 535px) {
      flex-basis: 100%;
   }
   .smallpin,
   .bigpin {
      position: absolute;
      top: -40px;
      right: -70px;
      @media (max-width: 591px) {
         top: -30px;
         right: 10px;
      }
      img {
         width: 100%;
      }
   }
   .bigpin {
      width: 100px;
      z-index: 1;
      @media (max-width: 535px) {
         width: 80px;
      }
   }
   .smallpin {
      width: 80px;
      z-index: 3;
      @media (max-width: 535px) {
         width: 60px;
      }
   }
   .video-thumb {
      position: relative;
      top: 50px;
      margin: 0 auto;
      width: 450px;
      height: 250px;
      @media (max-width: 535px) {
         width: 95%;
      }
   }
`;
