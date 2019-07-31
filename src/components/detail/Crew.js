import React from "react";
import styled from "styled-components";
import { mainGreen } from "Styled/colors";

function Crew({ crew }) {
   return (
      <CrewFrame>
      <h2 className="title">featured crew</h2>
         <ul className="crew-list">
            {crew
               ? crew.map((item, index) => {
                    return (
                       index < 10 && (
                          <li key={item.id}>
                             <li className="job">{item.job}</li>
                             <li>{item.name}</li>
                          </li>
                       )
                    );
                 })
               : "loading"}
         </ul>
      </CrewFrame>
   );
}

export default Crew;

const CrewFrame = styled.div`
   max-width: 600px;
   border: ${mainGreen} 1px solid;
   padding: 15px 25px;
   text-align:center;
   font-size: 14px;
   .title{
       text-transform: capitalize;
      margin: 20px 0px;
       font-size: 28px;
   }
   .crew-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      font-family: 'Poppins';
      .job{
          font-size:1.2em;
          font-weight: bold;
      }
      li {
         flex-basis: 50%;
         &:nth-child(2n){
             margin-bottom:10px;
         }
      }
   }
`;
