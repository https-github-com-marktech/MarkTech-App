import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElements';
// import {Route} from "react-router-dom";
// import Form from "../Form";

const Index = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>

                    <NavLink to='/categories' activeStyle>
                        <img className="logo_transparente" src="assets/logo.png" alt="logo"/>

                        All Categories
                    </NavLink>
                    <NavLink to='/profile' activeStyle>
                        My Profile
                    </NavLink>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/createAd'>+ Create Ad </NavBtnLink>

                </NavBtn>

            </Nav>
        </>
    );
};

export default Index;