import React from "react";
import { SidebarContainer, Icon, 
    CloseIcon, SidebarWrapper, 
    SidebarMenu, SidebarLink,
    SideBtnWrap, SidebarRoute, SidebarLinkRoute } from "./SidebarElemnts";

const Sidebar = ({isOpen, toggle}) =>{
    return(
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle} > Conocenos</SidebarLink>
                <SidebarLinkRoute to='/menu' onClick={toggle} > Menu</SidebarLinkRoute>
                <SidebarLinkRoute to='/reservaciones' onClick={toggle} > Reservaciones</SidebarLinkRoute>
                <SidebarLink to='Services' onClick={toggle} > Nuestros Servicios </SidebarLink>
                <SidebarLinkRoute to='/signup' onClick={toggle} > Sign up</SidebarLinkRoute>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='/signin'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
    )
}

export {Sidebar}