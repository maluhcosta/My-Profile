import React from "react";
import Image from "../../assets/img/page404/cat.jpg";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Page404() {
    return (
        <div className="page404-box">
            <Header className="header"/>

            <h1>error 404</h1>
            <img className="cat-page404" src={ Image } alt="Gato em um papel alumínio chorando com um quadrado de manteiga em cima"/>
            <h2>not found</h2>

            <Footer className="footer"/>
        </div>
    );
}

export default Page404;