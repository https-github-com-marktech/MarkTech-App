import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';

const Index = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>

                    <NavLink to='/categories' activeStyle>
                        <img className="logo_transparente" src="assets/logo.png" />

                        All Categories
                    </NavLink>
                    <NavLink to='/profile' activeStyle>
                        My Profile
                    </NavLink>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/new'>+ Create ad </NavBtnLink>
                </NavBtn>

            </Nav>
        </>
    );
};

export default Index;