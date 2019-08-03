import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

function BannerCard(props) {
   let formatedDate = new Date(props.release_date);
   let releaseDate = formatedDate.toLocaleDateString("cs"); //sem pujde lokalizace /en a cs

   const setClass = () =>{
      if(props.number === 1 && props.medium === 'tv'){
         return "main"
      }
      if(props.number === 2 && props.medium === 'movie'){
         return "main"
      }
      else return "small"
   }

   const caption =(lang)=>{
      if(props.medium ==='tv'){
         return `rating ${props.vote_average}`
      }
      if(props.medium ==='movie'){
         return lang === 'cs' ? `datum premiéry ${releaseDate}` : `released at ${releaseDate}`
      }
   }

   return (
      <IntroCard  className={setClass()}>
         <Link to={`/${props.medium}/detail/${props.id}`}>
            <img style={{width: '100%', height: '100%'}}
               src={`${"https://image.tmdb.org/t/p/"}/w500${props.backdrop_path}`}
               alt="name"
            />
         </Link>
         <figcaption>
            <h3>{props.medium === "tv" ? props.name : props.title}</h3>
           <p> {caption(props.lang)}</p>
         </figcaption>
      </IntroCard>
   );
}

export default BannerCard;

const IntroCard = styled.figure`
  position:relative;
  figcaption{
     padding: 5px 15px;
     position: absolute;
     bottom: 0;
     left: 0;
     color: #39FFB8;
     width:100%;
     background: rgba(0,0,0,.4);
        @media (max-width:489px) {
         h3 {
            font-size: 16px;
           
            white-space: nowrap;
         }
        }
     p{
        text-align: right;
        padding: 5px;
        font-weight: 500;
        }
     }
  
`;
