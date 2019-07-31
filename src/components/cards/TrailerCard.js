import React, { Component } from "react";
import styled from "styled-components";
import smallPin from "img/smallpin.png";
import bigPin from "img/bigpin.png";
import { mainGreen } from "Styled/colors";
import { IMAGE_BASEURL } from "dataFetch";
import Play from "img/play.png";

export default class TrailerCard extends Component {
   render() {
      return (
         <Container thumb={this.props.thumb}>
            <div className="video-thumb">
               <div className="smallpin">
                  <img src={smallPin} alt="smallpin" />
               </div>
               <div className="bigpin">
                  <img src={bigPin} alt="bigpin" />
               </div>
               <div className="videoframe" >
                <button><img src={Play} alt="play"/></button>
               </div>
            </div>
         </Container>
      );
   }
}
const Container = styled.div`
   flex-basis: 50%;
   position: relative;
   .smallpin,
   .bigpin {
      position: absolute;
      top: -40px;
      right: -70px;
      img {
         width: 100%;
      }
   }
   .bigpin {
      width: 100px;
      z-index: 1;
   }
   .smallpin {
      width: 80px;
      z-index: 3;
   }
   .video-thumb {
      position: relative;
      top: 50px;
      margin: 0 auto;
      width: 450px;
      height: 250px;
      .videoframe {
         background: ${({ thumb }) => `url(${IMAGE_BASEURL}/w780/${thumb})`};
         background-position: center;
         background-size: cover;
         position: relative;
         width: 100%;
         height: 100%;
         border: solid ${mainGreen} 2px;
         z-index: 2;
         box-shadow: -4px 5px 8px rgba(0, 0, 0, 0.4);
         &::before {
            position: absolute;
            content: "";
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            pointer-events: none;
         }

         button{
             position: absolute;
             background: transparent;
             outline: none;
             border: none;
             z-index: 2;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            cursor: pointer;
            transition: transform .3s ease-out;

            &:hover{transform:scale(.8) translate(-60%,-60%);}
         }
      }
   }
`;
