import React from "react";
import Footer from "../Footer/Footer";
import catGif from "../../assets/img/main/cat.gif";
import { Link } from 'react-router-dom';
import "./main.css";

export default function Main() {
    return (
        <div className="main-box">
            <div className="gif-title-box">
                <img className="cat-gif" src={catGif} alt="Gif de um gatinho com um coração em cima da cabeça"/>
                <h1 className="main-title">Malu Website</h1>
            </div>

            <div className="options">
                <Link className="btn-option" to="/sobre-mim">Sobre mim</Link>
                <Link className="btn-option" to="/portfolio">Portfolio</Link>
                <Link className="btn-option" to="/contato">Contato</Link>
                <Link className="btn-option" to="/pagina-nao-encontrada">Manutenção</Link>
            </div>
            <Footer/>
        </div>
    );
}