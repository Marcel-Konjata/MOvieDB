import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "Styled/elements";
import { MediaSelection, LanguageSelection } from "components/navigations";


// at bottom are CSS components

export default class MainHeader extends Component {
    state = {
        showMovieMenu: false,
        showTvMenu: false,
        selectedLanguage: 'CS',

    }

   handleSelect=(event)=>{
      this.setState({
         selectedLanguage: event.target.id
      })
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
                     <LanguageSelection lang={this.state.selectedLanguage} selectLang={this.handleSelect} />
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
      
      }
     
   
`;

const Navigation = styled.nav`
   display: flex;
   align-items: center;
   position: relative;
       
   
`
