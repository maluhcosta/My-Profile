import React from "react";

import "../../global.css";
import "./header.css";

function Header() {
    return (
        <nav className="nav-box">            
            <input className="input-hamburger" id="menu-hamburger" type="checkbox"/>
                
            <label className="label-hamburger" for="menu-hamburger">                    
                <div className="menu">
                    <span className="hamburger"></span>
                </div>
            </label>
                
            <ul className="link-box">
                <li><a className="header-link" href="/">Início</a></li>
                <li><a className="header-link" href="/sobre-mim">Sobre mim</a></li>
                <li><a className="header-link" href="/portfolio">Portfolio</a></li>
                <li><a className="header-link" href="/contato">Contato</a></li>
                <li><a className="header-link" href="/pagina-nao-encontrada">Página 404</a></li>
            </ul>       
        </nav>
    );
};
 
export default Header;