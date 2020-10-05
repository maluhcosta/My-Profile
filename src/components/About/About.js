import React from "react";

import profilePic from "../../assets/img/about/profile-pic.png";
import doneicon from "../../assets/img/about/done.png";
import loadingIcon from "../../assets/img/about/loading.png"

import "./style.css";

function About() {
    return (
        <div className="about-box">
            <img src={ profilePic } alt="Foto de Maria Luísa"/>
            
            <h1 className="about-title">Sobre mim</h1>
            
            <p className="about-me">
                Meu nome é Maria Luísa Costa, sou de Recife, tenho 23 anos e amo gatos, viagens
                e programar! Larguei a faculdade de fisioterapia no 5º período em 2019 e atualmente 
                estudo desenvolvimento web Front-End, iniciei os estudos em junho de 2020 e estou amando!
            </p>
            
            <h2>Tecnologias:</h2>
            
            <div className="technologies-about">
                <ul>
                    <li><img src={ doneicon } alt="Ícone de concluído"/>HTML</li>
                    <li><img src={ doneicon } alt="Ícone de concluído"/>CSS</li>
                    <li><img src={ loadingIcon } alt="Ícone de carregando"/>JavaScript</li>
                    <li><img src={ loadingIcon } alt="Ícone de carregando"/>ReactJS</li>
                </ul>
            </div>
        </div>
    );
}

export default About;