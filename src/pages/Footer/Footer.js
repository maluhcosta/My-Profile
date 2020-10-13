import React from "react";
import heartGif from "../../assets/img/footer/heart.gif"

import "./footer.css";

function Footer() {
    return (
        <footer className="footer-box">
            <p className="footer-line">Feito por Maria Luísa com muito</p>
            <img className="footer-gif" src={heartGif} alt="Gif de coração pulsando"/>
        </footer>
    );
}

export default Footer;