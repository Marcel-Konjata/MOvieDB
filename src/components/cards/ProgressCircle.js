import React from "react";
import styled from "styled-components";

function Circle({ size = 60, strokeWidth = 5, color = "blue", rate = 100 }) {
   const radius = size / 2 - strokeWidth * 2;
   const circumference = radius * 2 * Math.PI; // circumference  je obvod

   return (
      <Spinner circumference={circumference} percent={rate}>
         <svg className="progress-ring" height={size} width={size}>
            <circle
               className="progress-ring--circle"
               stroke-width={strokeWidth}
               fill="transparent"
               stroke={color}
               r={radius} //radius set how big it will be
               cx={size / 2} //centre point x
               cy={size / 2} // centre point y
            />
         </svg>
      </Spinner>
   );
}
export default Circle;
//offset = radius * 2 .math.PI
const Spinner = styled.div`
   display: inline-block;
   .progress-ring {
      transform-origin: center;
      transform: rotate(-90deg);
   }

   .progress-ring--circle {
      ${props =>
         `stroke-dasharray: ${props.circumference};
      stroke-dashoffset: ${props.circumference -
         (props.percent / 100) * props.circumference};`}
   }
`;
