import React from "react";
import styled from "styled-components";
import Portal from "./Portal";
import {menuGreen} from "Styled/colors"
export default function VideoPortal({ videoKey, active = false, setClose }) {
   return (
     
            <Portal>
               <Videoframe>
                  <div className="video-wrapper">
                  <div className="upper-line"><h3>MovieDB</h3><button onClick={setClose}>close</button></div>
                     <iframe
                        title="smuck"
                        // width="560"
                        // height="315"
                        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                     />
                  </div>
               </Videoframe>
            </Portal>
    
   );
}

const Videoframe = styled.div`
   position: fixed;
   padding: 10px;
   top: 0;
   left: 0;
   z-index: 100;
   width: 100vw;
   height: 100vh;
   background: rgba(0, 0, 0, 0.7);
   .video-wrapper{
     width: 80%;
     height: 75%;
     margin:0 auto;
     transform: translateY(20%);
     iframe{
       width: 100%;
       height: 100%;
     }
   }
   .upper-line{
     width: 100%;
     height: 50px;
     color: ${menuGreen};
     background: black;
     display: flex;
     align-items: center;
    justify-content: center;
    button{
      margin-left: auto;
      margin-right: 25px;
      cursor: pointer;
      background: transparent;
      color: inherit;
      border: 2px ${menuGreen} solid;
      padding: 10px 15px;
    }
    h3{
      font-family: 'Quantico', sans-serif;
      margin-left: auto;
    }
   }
`;
