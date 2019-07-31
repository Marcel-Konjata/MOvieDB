import React from "react";
import styled from "styled-components";
function MainInfo({ title, info }) {
   return (
      <Description>
         <h2>{title}</h2>
         <p>{info}</p>
      </Description>
   );
}

export default MainInfo;

const Description = styled.section`
color: black;
max-width: 600px;
margin-right: auto;
margin-left: auto;
padding: 40px;
h2{
    margin-bottom: 25px;
    font-size: 30px;
    font-family: 'Quantico', sans-serif;
}
p{
    font-size: 20px;
    font-family: 'Poppins' sans-serif;
    
}
`;
