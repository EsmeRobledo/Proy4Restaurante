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
                            <NavLinks to='Aboutus'>Conocenos</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='/Menu'>Menu</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='Services'>Servicios</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='/reservations'>Reservaciones</NavLinks>
                       </NavItem>
                       <NavItem>
                            <NavLinks to='/signup'>Sing up</NavLinks>
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