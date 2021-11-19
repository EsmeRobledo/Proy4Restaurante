import styled from 'styled-components'
import {Link as LinkR}  from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: #000;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 15px;
position: sticky;
border: none;
z-index: 10;
top: 5px;
@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}
`;
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
color: red;
justify-self: flex-start;
cursor: pointer;
font-size: 24px;
display: flex;
align-items: center;
font-family: 'Yuji Boku', serif;
margin-left: 24px;
margin-top: 10px
font-weight: bold;
text-decoration: none;
`;

export const MobileIcon = styled.div`
display: none;
   
    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 24px;
        cursor: pointer;
        color: white;
    }
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
font-family: 'Abril Fatface', cursive;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: poiter;

    &.active{
        border-bottom: 3px splid red;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    font-family: 'Abril Fatface', cursive;
    @media screen and (max-width: 768px){
        display:none;
    }
`;
export const NavBtnLink = styled(LinkR)`
    background: red;
    padding: 10px 20px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: poiter;
    border-radius: 25px;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background:#fff;
        color: #010606;
    }
   
`;