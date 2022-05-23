import React from 'react';
import Header from "../Heder";
import Footer from "../Footer";

function Layout({children}) {
    return (
        <>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </>
    );
}

export default Layout;
