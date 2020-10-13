import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./contact.css";

import githubIcon from "../../assets/img/contact/github.png";
import LinkedinIcon from "../../assets/img/contact/linkedin.png";
import instagramIcon from "../../assets/img/contact/instagram.png";


export default function Contact() {
    return (
        <div className="contat-box">
            <Header/>
            <h1 className="contat-title">Contato</h1>
            <ul className="contats-ul">
                <li className="contats-btn">
                    <a className="contats-link" href="https://www.instagram.com/maluhcosta" target="blank">
                        <img className="contats-pic" src={instagramIcon} alt="Logo do Instagram"/>
                        /maluhcosta
                    </a>
                </li>

                <li className="contats-btn">
                    <a className="contats-link" href="https://github.com/maluhcosta" target="blank">
                        <img className="contats-pic" src={githubIcon} alt="Logo do GitHub"/>
                        /maluhcosta
                    </a>
                </li>

                <li className="contats-btn">
                    <a className="contats-link" href="https://www.linkedin.com/in/maluhcosta/" target="blank">
                        <img className="contats-pic" src={LinkedinIcon} alt="Logo do Linkedin"/>
                        /maluhcosta
                    </a>
                </li>
            </ul>
            <Footer/>
        </div>
    );
}