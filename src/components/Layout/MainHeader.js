import React, { Component } from "react";
import styled from "styled-components";
import { Wrapper } from "Styled/elements";

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
                     <a href="#" name="movies" onMouseEnter={(event)=>this.handleHover(event)}>Filmy</a>
                     <a href="#" name="tv" onMouseEnter={(event)=>this.handleHover(event)}>Serialy</a>
                  </Navigation>
                  <Navigation>
                     <p>jazyk</p>
                     <a href=""> {this.state.selectedLanguage}</a>
                  </Navigation>
               </div>
            </Wrapper>
         </StyledHeader>
      );
   }
}

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
      font-family: "Roboto", sans-serif;
      display: flex;
      color: white;
      padding: 15px 20px;
      font-size: 18px;
      font-weight: bold;
      justify-content: space-between;
      a {
         text-decoration: none;
         color: inherit;
      }
   }
`;

const Navigation = styled.nav`
   display: flex;
   a:not(:first-child) {
       display:block;
       margin-left:25px;
       
   }
`;
