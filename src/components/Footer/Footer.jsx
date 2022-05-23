import React from 'react';
import {FooterStyled} from "./FooterStyled";
import {FaTelegramPlane} from "react-icons/fa";
import {SiMaildotru} from "react-icons/si";

function Footer(props) {
    return (
        <FooterStyled>
            <ul className="list">
                <li className="item">
                    <FaTelegramPlane/>
                    <a className="link">High Education Bot</a>
                </li>
                <li className="item">
                    <FaTelegramPlane/>
                    <a className="link">Щоденник абітурієнта</a>
                </li>
                <li className="item">
                    <SiMaildotru/>
                    <a className="link">reply@studinfo.org</a>
                </li>
            </ul>
            <div><p>© 2022 Studinfo.org</p></div>
        </FooterStyled>
    );
}

export default Footer;
