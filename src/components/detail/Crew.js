import React from "react";
import styled from "styled-components";
import { mainGreen } from "Styled/colors";
import { Localization } from "components/context/LanguageContext";

function Crew({ crew }) {
   return (
      <CrewFrame>
         <Localization>
            {({ language }) => (
               <>
                  <h2 className="title">
                     {language === "en" ? "featured crew" : "vybraný štáb"}
                  </h2>
                  <ul className="crew-list">
                     {crew
                        ? crew.map((item, index) => {
                             return (
                                index < 10 && (
                                   <ul key={index}>
                                      <li className="job">{item.job}</li>
                                      <li>{item.name}</li>
                                   </ul>
                                )
                             );
                          })
                        : "loading"}
                  </ul>
               </>
            )}
         </Localization>
      </CrewFrame>
   );
}

export default Crew;

const CrewFrame = styled.div`
   max-width: 600px;
   border: ${mainGreen} 1px solid;
   padding: 15px 25px;
   text-align: center;
   font-size: 14px;
   ul {
      list-style: none;
      flex-basis: 50%;
   }
   .title {
      text-transform: capitalize;
      margin: 20px 0px;
      font-size: 28px;
   }
   .crew-list {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      font-family: "Poppins";
      .job {
         font-size: 1.2em;
         font-weight: bold;
      }
      li {
         &:nth-child(2n) {
            margin-bottom: 10px;
         }
      }
   }
`;
