import React from "react";
import { SidebarContainer, Icon, 
    CloseIcon, SidebarWrapper, 
    SidebarMenu, SidebarLink,
    SideBtnWrap, SidebarRoute } from "./SidebarElemnts";

const Sidebar = ({isOpen, toggle}) =>{
    return(
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='Aboutus' onClick={toggle} > About us</SidebarLink>
                <SidebarLink to='Menu' onClick={toggle} > Menu</SidebarLink>
                <SidebarLink to='Services' onClick={toggle} > Services </SidebarLink>
                <SidebarLink to='/Signup' onClick={toggle} > Sign up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    )
}

export {Sidebar}