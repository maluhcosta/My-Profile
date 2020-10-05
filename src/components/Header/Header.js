import React from "react";

import Main from "../Main/Main";
import About from "../About/About";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import Page404 from "../Page404/Page404";

function Header() {
    return (
        <header className="header-box">
            <nav className="nav-header">
                <ul>
                    <li><a href="../Main/Main">Início</a></li>

                    <li><a href="../Main/Main">Sobre mim</a></li>
                    <li><a href="../About/About">Portfolio</a></li>
                    <li><a href="../Page404/Page404">Página 404</a></li>
                    <li><a href="../Contact/Contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
};
 
export default Header;