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
                        About
                    </NavLink>
                    <NavLink to='/profile' activeStyle>
                        Events
                    </NavLink>

                </NavMenu>

            </Nav>
        </>
    );
};

export default Index;