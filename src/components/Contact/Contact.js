import React from "react";

import githubIcon from "../../assets/img/contact/github.png";
import LinkedinIcon from "../../assets/img/contact/linkedin.png";
import instagramIcon from "../../assets/img/contact/instagram.png";

function Contact() {
    return (
        <div className="contat-box">
            <h1>Contato</h1>

            <div className="contats">
                <ul>
                    <li>
                        <a href="https://github.com/maluhcosta" target="blank">GitHub</a>
                        <img src={ githubIcon } alt="Logo do GitHub"/>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/in/maluhcosta/" target="blank">LinkedIn</a>
                        <img src={ LinkedinIcon } alt="Logo do Linkedin"/>
                    </li>

                    <li>
                        <a href="https://www.instagram.com/maluhcosta" target="blank">Instagram</a>
                        <img src={ instagramIcon } alt="Logo do Instagram"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Contact;