import React from 'react';
import Navigation from "./Navigation";
import Language from "./Language";
import {HeaderStyled} from "./HeaderStyled";

function Header(props) {
    return (
        <HeaderStyled>
            <Navigation/>
            <Language/>
        </HeaderStyled>
    );
}

export default Header;
