import styled from 'styled-components';
import { menuGreen } from 'Styled/colors';



export const PrimaryButton = styled.button`
color: ${menuGreen};
background: transparent;
outline: none;
border: 2px solid ${menuGreen};
padding: 10px 15px;
font-size: 16px;
font-family: 'Roboto', sans-serif;
font-weight: 600;
`

export const HeaderButton = styled(PrimaryButton)`
    padding:10px;
    border-radius: 2px;
    cursor: pointer;
    margin-left: 25px;
    transition: all .3s ease;
   &.active{
        color:black;
        background: ${menuGreen};
        
        
    }
    
    
`

export const MenuArrow = styled.div`
position:absolute;
bottom: -30px;
right: 12px;
width:20px;
height: 20px;
transform: rotate(-45deg);
background:transparent;
border-right: 2px solid ${menuGreen};
border-top: 2px solid ${menuGreen};
`