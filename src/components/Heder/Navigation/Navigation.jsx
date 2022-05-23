import React from 'react';
import {links} from "./links";
import Link from "next/link";
import {NavigationStyled} from "./NavigationStyled";

function Navigation(props) {
    return (
        <NavigationStyled>
            <Link href="/">
                <a className='logoLink'>STUDINFO</a>
            </Link>
            <ul className='navList'>
                {links.map(link => (
                    <li className='navItem'>
                        <Link href={link.pathname}>
                            <a className='itemLink'>{link.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </NavigationStyled>
    );
}

export default Navigation;
