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
                        Categories
                    </NavLink>
                    <NavLink to='/profile' activeStyle>
                        Profile
                    </NavLink>

                </NavMenu>

            </Nav>
        </>
    );
};

export default Index;