import React from "react";
import styled from "styled-components";
import { Transition } from "react-spring/renderprops";
import Portal from "./Portal";
import { menuGreen } from "Styled/colors";
export default function VideoPortal({ videoKey, active = false, setClose }) {
   return (
      <Portal>
         <Videoframe>
            <Transition
               items={active}
               from={{ transform: "scale(0.5) translate3d(0,0.1%,0)", opacity: 0 }}
               enter={{ transform: "scale(1) translate3d(0,18%,0)", opacity: 1, }}
               leave={{ transform: "scaleX(0)", opacity: 0 }}
            >
               {active =>
                  active &&
                  (props => (
                     <div className="video-wrapper" style={props}>
                        <div className="upper-line">
                           <h3>MovieDB</h3>
                           <button onClick={setClose}>close</button>
                        </div>
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
                  ))
               }
            </Transition>
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
   .video-wrapper {
      width: 80%;
      height: 75%;
      margin: 0 auto;
     background: black;
      iframe {
         width: 100%;
         height: 100%;
      }
   }
   .upper-line {
      width: 100%;
      height: 50px;
      color: ${menuGreen};
      background: black;
      display: flex;
      align-items: center;
      justify-content: center;
      button {
         margin-left: auto;
         margin-right: 25px;
         cursor: pointer;
         background: transparent;
         color: inherit;
         border: 2px ${menuGreen} solid;
         padding: 10px 15px;
      }
      h3 {
         font-family: "Quantico", sans-serif;
         margin-left: auto;
      }
   }
`;
