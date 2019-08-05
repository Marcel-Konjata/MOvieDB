import React from "react";
import { IMAGE_BASEURL } from "./../../dataFetch";
import styled from "styled-components";
import Uknown from "img/uknown.png"

function CastCard({ name, profile_path, character }) {
   return (
      <StyledCard>
         <div className="img-wrapper">
            {profile_path ? (
               <img src={`${IMAGE_BASEURL}/w185${profile_path}`} alt={name} />
            ) : (
               <img src={Uknown} alt={name} />
            )}
         </div>
         <h3 className="actor-name">{name}</h3>
      </StyledCard>
   );
}

export default CastCard;

const StyledCard = styled.div`
overflow: hidden;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 5px;
   width: 180px;
   height: 320px;
   text-align: center;
   background: white;
   color: black;
   padding: 5px 5px 10px;
   border-radius: 5px;
   font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   img {
      width: 100%;
      display: block;
      border-radius: 5px;
      margin: 0 auto;
      
   }
   .img-wrapper{width: 98%; max-height: 85%; overflow: hidden }
   .actor-name {
      margin-top: 10px;
   }
`;
