import React from 'react';
import {useLocation} from "react-router-dom";
import Login from "../../modules/auth/login";
import Registration from "../../modules/auth/registration";


function Auth(props) {
    const location = useLocation()
    const {pathname} = location
    if(pathname==='/signIn'){
        return (<Login/>)
    }
    if(pathname==='/signUp'){
        return (<Registration/>)
    }

}

export default Auth;
