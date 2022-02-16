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

                        Categories
                    </NavLink>
                    <NavLink to='/profile' activeStyle>
                        My Profile
                    </NavLink>

                </NavMenu>

            </Nav>
        </>
    );
};

export default Index;