import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./portfolio.css";

import downloadIcon from "../../assets/img/portfolio/download.png";
import repositoryIcon from "../../assets/img/portfolio/repository.png";

import curriculo from "../../assets/img/portfolio/CURRICULO - MARIA LUISA.pdf";

export default function Portfolio() {
    return ( 

        <div className="portfolio-box">
            <Header/>       
            <h1 className="portfolio-title">Meu Portfolio</h1>
            <p className="portfolio-line">
                Você pode fazer o download do meu currículo
                e acessar o meu repositório no GitHub.
            </p>          
            <div className="link-box-div">
                <ul className="link-box-ul">
                    <li className="portfolio-link">                        
                        <a className="portfolio-btn" href={curriculo} download="CURRICULO - MARIA LUISA.pdf">
                            <img className="portfolio-icon" src={downloadIcon}/>
                            Currículo
                        </a>
                    </li>
                    
                    <li className="portfolio-link">
                        <a className="portfolio-btn" href="https://github.com/maluhcosta?tab=repositories" target="blank">
                            <img className="portfolio-icon" src={repositoryIcon}/>
                            Repositório
                        </a>
                    </li>
                </ul>
            </div> 
            <Footer/>           
        </div>
    );
}