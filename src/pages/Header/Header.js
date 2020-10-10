import React from "react";

function Header() {
    return (
        <nav className="nav-box">
            <ul>
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