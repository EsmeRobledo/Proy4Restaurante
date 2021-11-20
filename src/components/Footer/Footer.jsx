import React from 'react'
import { animateTopScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper,
     FooterLinkItems, FooterLinkTitle, FooterLink, FooterTime,FooterInfo, SocialMedia, SocialMediaWrap,
     SocialLogo, WebsiteRightd, SocialIcons, SocialIconLink } from './FooterElements';

function Footer() {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
             <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>En nuestro Sitio</FooterLinkTitle>
                                    <FooterLink to="/reservations">Reservaciones</FooterLink>
                                    <FooterLink to="/testimonials">Testimonios</FooterLink>
                                    <FooterLink to="/galery">Galeria</FooterLink>
                                    <FooterLink to="/menu">Menu</FooterLink>
                           </FooterLinkItems>
                       
                            <FooterLinkItems>
                                <FooterLinkTitle>Social Media</FooterLinkTitle>
                                    <FooterLink to="/">Facebook</FooterLink>
                                    <FooterLink to="/">Instagram</FooterLink>
                                    <FooterLink to="/">Twitter</FooterLink>
                                    <FooterLink to="/">Yelp</FooterLink>
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
                           <FooterLinkItems>
                                <FooterLinkTitle>Horarios</FooterLinkTitle>
                                    <FooterTime>Lunes a Sabado</FooterTime>
                                    <FooterTime>11:30 AM - 7:30 PM</FooterTime>
                                    <FooterTime>Domingos</FooterTime>
                                    <FooterTime>12:00 PM - 8:00 PM</FooterTime>
                           </FooterLinkItems>
                        </FooterLinksWrapper>
                    </FooterLinksContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to="/" onClick={toggleHome}>
                                RamenHouse
                            </SocialLogo>
                            <WebsiteRightd>RamenHouse © {new Date().getFullYear()} All rights reserved.</WebsiteRightd>
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" arial-label="Facebook"><FaFacebook/></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" arial-label="Instagram"><FaInstagram/></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" arial-label="Twitter"><FaTwitter/></SocialIconLink>
                                <SocialIconLink href="/" target="_blank" arial-label="Yelp"><FaYelp/></SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    )
}

export default Footer
