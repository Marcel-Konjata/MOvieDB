import React from "react";
import styled from "styled-components";
import { mainGreen } from "Styled/colors";

function Rating({
   size = 60,
   strokeWidth = 5,
   color = "blue",
   rate = 100,
   textsize = 16
}) {
   const radius = size / 2 - strokeWidth * 2;
   const circumference = radius * 2 * Math.PI; // circumference  je obvod

   return (
      <Spinner
         circumference={circumference}
         percent={rate}
         fontsize={textsize}
         height={size}
      >
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
            <circle
               className="progress-ring--outer"
               stroke-width={strokeWidth / 5}
               fill="transparent"
               stroke={mainGreen}
               r={radius + strokeWidth} //radius set how big it will be
               cx={size / 2} //centre point x
               cy={size / 2} // centre point y
            />
            <circle
               className="progress-ring--inner"
               stroke-width={strokeWidth / 5}
               fill="transparent"
               stroke={mainGreen}
               r={radius - strokeWidth} //radius set how big it will be
               cx={size / 2} //centre point x
               cy={size / 2} // centre point y
            />
         </svg>
         <div className="rate-value">{rate}%</div>
      </Spinner>
   );
}
export default Rating;
//offset = radius * 2 .math.PI
const Spinner = styled.div`
   position: relative;
   display: inline-block;
   height: ${({ height }) => `${height}px`};
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

   .rate-value {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: ${props => props.fontsize}px;
      font-family: "Quantico", -apple-system, BlinkMacSystemFont, "Segoe UI",
         Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
         sans-serif;
   }
`;
