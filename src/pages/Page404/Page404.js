import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Image from "../../assets/img/page404/cat.jpg";
import "./page404.css";

export default function Page404() {
    return (
        <div className="page404-box">
            <Header/>
            <h1 className="page404-title">error 404</h1>
            <img className="page404-pic" src={ Image } alt="Gato em um papel alumínio chorando com um quadrado de manteiga em cima"/>
            <h2 className="page404-subtitle">not found</h2>
            <Footer/>
        </div>
    );
}