import React from 'react'
import img1 from "img/moviefooter1.png"
import styled from "styled-components"
import { footerGreen } from 'Styled/colors';


function MainFooter() {
   
    return (
        <StyledFooter>
        <div className="text">
        <p>Find any movie  or TV show you like</p>

        <p>This app is powered by MovieDB API
To support them use link below</p>

<p><a href="https://www.themoviedb.org/">{`<MOVIE DB>`}</a></p>
        </div>
        <div className="imgWrapper">
            <img src={img1} alt="footer img iron man"/>
        </div>
        </StyledFooter>
    )
}

export default MainFooter



const StyledFooter = styled.footer`
display: flex;
justify-content: flex-end;
align-items: center;
.text{
    margin-left: auto;
    color: ${footerGreen};
    p{
        font-size: 1.2rem;
        &:not(:last-child){
            margin-bottom: 10px;
        }
    }
    a{
        color: inherit;
        text-decoration: none;
    }
}

.imgWrapper{
    width: 450px;
    margin-left: auto;
    img{ width: 100%;}
}
`;