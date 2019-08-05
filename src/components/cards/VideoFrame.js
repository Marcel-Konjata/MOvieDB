import React from "react";
import styled from "styled-components";
import { mainGreen } from "Styled/colors";


import { IMAGE_BASEURL } from "dataFetch";
import Play from "img/play.png";
import Toggle from "components/renderProps/Toggle";
import VideoPortal from "components/portals/VideoPortal";

function VideoFrame({ thumb, videoKey }) {
   return (
      <Frame thumb={thumb}>
         <Toggle>
            {({ isToggled, toggle }) => (
               <>
                  <button onClick={toggle}>
                     <img src={Play} alt="play" />
                  </button>
                  {isToggled ? (
                     <VideoPortal
                        active={isToggled}
                        videoKey={videoKey}
                        setClose={toggle}
                     />
                  ) : null}
               </>
            )}
         </Toggle>
      </Frame>
   );
}

export default VideoFrame;

const Frame = styled.div`
   background: ${({ thumb }) => `url(${IMAGE_BASEURL}/w780/${thumb})`};
   background-position: center;
   background-size: cover;
   position: relative;
   width: 100%;
   height: 100%;
   border: solid ${mainGreen} 2px;
   z-index: 2;
   box-shadow: -4px 5px 8px rgba(0, 0, 0, 0.4);
   &::before {
      position: absolute;
      content: "";
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.7);
      pointer-events: none;
   }

   button {
      position: absolute;
      background: transparent;
      outline: none;
      border: none;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      cursor: pointer;
      transition: transform 0.3s ease-out;

      &:hover {
         transform: scale(0.8) translate(-60%, -60%);
      }
   }
`;
