import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import downloadIcon from "../../assets/img/portfolio/download.png";
import repositoryIcon from "../../assets/img/portfolio/repository.png";

import curriculo from "../../assets/img/portfolio/CURRICULO - MARIA LUISA.pdf";

function Portfolio() {
    return (
        <div className="portfolio-box">
            <Header className="header"/>

            <h1>My Portfolio</h1>
                        
            <div>
                <ul>
                    <li>
                        <img src={ downloadIcon }/>
                        <a className="btn-portfolio" href={ curriculo } download="CURRICULO - MARIA LUISA.pdf">My resume</a>
                    </li>
                    
                    <li>
                        <img src={ repositoryIcon }/>
                        <a className="btn-portfolio" href="https://github.com/maluhcosta?tab=repositories" target="blank">My repository</a>
                    </li>
                </ul>
            </div> 

            <Footer className="footer"/>           
        </div>
    );
}

export default Portfolio;