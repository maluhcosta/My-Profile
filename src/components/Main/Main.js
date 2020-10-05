import React from "react";
import catGif from "../../assets/img/header/cat.gif";

function Main() {
    return (
        <div className="header-box">
            <img className="profilePic" src={ catGif } alt="Gif de um gatinho"/>
            <h1>Meu Website</h1>
            <h2>Maria Luísa</h2>
        </div>
    );
}

export default Main;