import React from "react";
import catGif from "../../assets/img/header/cat.gif";
import { Link } from 'react-router-dom';
import Footer from "../Footer/Footer";

function Main() {
    return (
        <div className="header-box">
            <img className="profilePic" src={ catGif } alt="Gif de um gatinho"/>
            <h1>Meu Website</h1>
            <h2>Maria Luísa</h2>
            
            <div className="options">
                <Link className="btn-option" to="/sobre-mim">Sobre mim</Link>
                <Link className="btn-option" to="/portfolio">Portfolio</Link>
                <Link className="btn-option" to="/contato">Contato</Link>
                <Link className="btn-option" to="/pagina-nao-encontrada">Manutenção</Link>
            </div>

            <Footer className="footer"/>
        </div>
    );
}

export default Main;