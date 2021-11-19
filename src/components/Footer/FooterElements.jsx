
import  styled  from 'styled-components';
 import {Link} from 'react-router-dom'



export const FooterContainer = styled.footer`
    background-color: black;
    
`
export const FooterWrap = styled.div`
    padding: 20px;
    display: flex;
    border-bottom: 5px solid red;
    flex-direction: column;
    justify-content: center;
   /* max-width: 1100px;*/
    margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding: 32px
    }
`
export const FooterLinksWrapper = styled.div`
    display: flex;
    @media screen and (max-width: 820px){
        flex-direction: column;
    }
    
`
export const FooterLinkItems = styled.div`
    display: grid;
    grid-template-columns: (auto, 1fr);
    margin: left;
    width: 300px;
    box-sizing: border-box;
    color: #fff;
    align-items: center;
   
   

    @media screen and (max-width: 420px){
        grid-template-columns: (auto, 1fr);
        padding: 0 20px;
    }
`
export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    margin-bottom: 16px;
`
export const FooterLink  = styled(Link)`
    color: white;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;

    &:hover{
        color: red;
        transition: 0.3s ease-out;
    }
`
export const FooterInfo = styled.p`
    color: white;
    margin-bottom: 0.5rem;
    font-size: 14px;
`
export const FooterTime = styled.p`
color: white;
margin-bottom: 0.5rem;
font-size: 14px;
`                     
 
