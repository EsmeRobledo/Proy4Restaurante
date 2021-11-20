import React, {useState, useEffect} from "react";
import {animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, NavLogo, 
    MobileIcon, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink, NavLinksR} from "./NavbarElemnts"
    import { FaBars } from 'react-icons/fa'

   


function Navigation({toggle,productData}){
    const [scrollNav, setScroolNav] = useState(false)
    const changeNav = ()=> {
        if(window.scrollY >= 80){
            setScroolNav(true)
        }else{
            setScroolNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
       <>
         <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                   <NavLogo to='/' onClick={toggleHome}>Ramen House</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-60} >Conocenos</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinksR to='/menu' data={productData}>Menu</NavLinksR>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='Services' smooth={true} duration={500} spy={true} exact='true' offset={-60}>Servicios</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinksR to='/reservaciones'>Reservaciones</NavLinksR>
                       </NavItem>
                       <NavItem>
                            <NavLinksR to='/signup'>Sing up</NavLinksR>
                       </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
       </>
    )
}

export {Navigation};