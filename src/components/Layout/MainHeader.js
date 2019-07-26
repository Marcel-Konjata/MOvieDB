import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "Styled/elements";
import { MediaSelection } from "components/navigations";
import { menuGreen } from "Styled/colors";

// at bottom are CSS components

export default class MainHeader extends Component {
    state = {
        showMovieMenu: false,
        showTvMenu: false,
        selectedLanguage: 'CS',

    }

    handleHover = (event) => {
        const {name} = event.target;
        if(name==='movies'){
            this.setState({
                showMovieMenu: true,
                showTvMenu:false
            })
        }
        if(name==='tv'){
            this.setState({
                showMovieMenu: false,
                showTvMenu:true
            })
        }
        
    }

   render() {
    
      return (
         <StyledHeader>
            <h1 className="logo"> MOVIE DB </h1>
            <Wrapper>
               <div className="navigations">
                  <Navigation>
                    <MediaSelection mediaType="movie" />
                    <MediaSelection mediaType="tv" />
                     
                  </Navigation>
                  <Navigation>
                     <p>jazyk</p>
                     <button  className="selection"> {this.state.selectedLanguage}</button>
                  </Navigation>
               </div>
            </Wrapper>
         </StyledHeader>
      );
   }
}

// CSS STyles

const StyledHeader = styled.header`
   .logo {
      font-family: "Russo One", sans-serif;
      padding: 25px;
      text-align: center;
      font-weight: 400;
   }
   .navigations {
      background: linear-gradient(
         90.25deg,
         #010101 22.85%,
         #05ba84 50.69%,
         #000000 73.26%
         
      );
      padding:10px;
      font-family: "Roboto", sans-serif;
      display: flex;
     align-items: center;
      color: white;
      
      font-size: 18px;
      font-weight: bold;
      justify-content: space-between;
      .selection{
         padding: 5px;
         margin-left:5px;
         border-radius:5px;
         &:hover{
            background-color: transparent;
           border: 1px solid ${menuGreen};
           color:  ${menuGreen};
      } 
      }
     
   }
`;

const Navigation = styled.nav`
   display: flex;
   align-items: center;
   position: relative;
       
   
`
