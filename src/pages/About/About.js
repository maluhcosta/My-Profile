import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import profilePic from "../../assets/img/about/profile-pic.png";
import "./about.css";

export default function About() {
    return (
        <div className="about-box">
            <Header/>
            <img className="about-pic" src={ profilePic } alt="Foto de Maria Luísa"/>
            <h1 className="about-title">Sobre mim</h1>
            
            <div className="another-color">
                <p className="about-me">
                    Meu nome é <span className="span">Maria Luísa Oliveira da Costa</span>, sou de <span className="span">Recife</span>, tenho <span className="span">23 anos</span> e amo gatos, viajar
                    e programar! Larguei a faculdade de fisioterapia e atualmente estudo desenvolvimento web <span className="span">Front-End</span>, desde junho de 2020 e estou amando! ❤
                </p>
                
                <h2 className="about-tec-title">Tecnologias que estudo:</h2>
                
                <div className="tecs-box">
                    <ul className="about-tecs">
                        <li className="tec-tag">HTML</li>
                        <li className="tec-tag">CSS</li>
                        <li className="tec-tag">JavaScript</li>
                        <li className="tec-tag">ReactJS</li>
                    </ul>
                </div>
                <Footer/>
            </div>
        </div>
    );
}