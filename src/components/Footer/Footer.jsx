import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, FooterTime,FooterInfo } from './FooterElements';

function Footer() {
    return (
        <>
             <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>En nuestro Sitio</FooterLinkTitle>
                                    <FooterLink to="/signin">Reservaciones</FooterLink>
                                    <FooterLink to="/signin">Testimonios</FooterLink>
                                    <FooterLink to="/signin">Galeria</FooterLink>
                                    <FooterLink to="/signin">Menu</FooterLink>
                           </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterLink to="/signin">Facebool</FooterLink>
                                    <FooterLink to="/signin">Instagram</FooterLink>
                                    <FooterLink to="/signin">Twitter</FooterLink>
                                    <FooterLink to="/signin">Yelp</FooterLink>
                           </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Informacion</FooterLinkTitle>
                                    <FooterInfo>Reservaciones</FooterInfo>
                                    <FooterInfo>(916)-841-8886</FooterInfo>
                                    <FooterInfo>Calle S 2065, Guanajuato 98541 </FooterInfo>
                                    <FooterInfo>ramenhouse@gmail.com</FooterInfo>
                           </FooterLinkItems>
                        </FooterLinksWrapper>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Horarios</FooterLinkTitle>
                                    <FooterTime>Lunes a Sabado</FooterTime>
                                    <FooterTime>11:30 AM - 7:30 PM</FooterTime>
                                    <FooterTime>Domingos</FooterTime>
                                    <FooterTime>12:00 PM - 8:00 PM</FooterTime>
                           </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
