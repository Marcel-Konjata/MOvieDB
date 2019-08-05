import React from "react";
import styled from "styled-components";
import {useSpring, animated} from 'react-spring';
import {Spring, config} from 'react-spring/renderprops';


function Circle({ size = 60, strokeWidth = 5, color = "red", rate }) {
   const radius = size / 2 - strokeWidth * 2;
   const circumference = radius * 2 * Math.PI; // circumference  je obvod
   const ratecolor = (rate) =>{
      switch(true){
         case rate>=40 && rate<50: return "rgb(255, 238, 0)";
         case rate>=50 && rate<60: return "rgb(217, 255, 0)";
         case rate>=60 && rate<70 : return "rgb(72, 255, 0)";
         case rate>=70 && rate<80 : return "rgb(0, 255, 157)";
         case rate>=80 : return "rgb(0, 255, 234)";
         default: return "indigo"
      }
   }


   const styles = useSpring({
      from: {strokeDashoffset:circumference, stroke:'rgb(255, 21, 0)'},
      strokeDashoffset: circumference - rate/100 * circumference,
      stroke: ratecolor(rate),
       config: {mass:50, friction: 100}
   })
   
   return (
      <Spinner circumference={circumference} percent={rate} size={size} >
         <svg className="progress-ring" height={size} width={size}>
            <animated.circle
               className="progress-ring--circle"
               strokeWidth={strokeWidth}
               strokeDasharray={circumference}
               style={{...styles}}
               fill="none"
               
               r={radius} //radius set how big it will be
               cx={size / 2} //centre point x
               cy={size / 2} // centre point y
            />
         </svg>
         <Spring from={{number:0}} to={{number:rate}} config={config.molasses}>
            {props => <span className="rate-number">{props.number.toFixed()}</span> }
         
         </Spring>
      </Spinner>
   );
}
export default Circle;
//offset = radius * 2 .math.PI
const Spinner = styled(animated.div)`
   display: inline-block;
   position: relative;

   .progress-ring {
      transform-origin: center;
      transform: rotate(-90deg);
      height: ${props => props.size}px;
      width: ${props => props.size}px;
   }

   /* .progress-ring--circle {
      ${props =>
         `stroke-dasharray: ${props.circumference};
         stroke-dashoffset: ${props.circumference -
         (props.percent / 100) * props.circumference};`} 
   } */
   .rate-number {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      color: white;
   }
`;
