import React from "react";
import {Nav, NavbarContainer, NavLogo, 
    MobileIcon, 
    NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from "./NavbarElemnts"
    import { FaBars } from 'react-icons/fa'


function Navigation({toggle}){
    return (
       <>
         <Nav>
                <NavbarContainer>
                   <NavLogo to='/'>Ramen House</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                    <NavItem>
                            <NavLinks to="/Aboutus">About us</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to="menu">Menu</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to="/Services">Services</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to="/Reserv">Reservaciones</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to="/Singup">Sign up</NavLinks>
                       </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/Singin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
       </>
    )
}

export {Navigation};