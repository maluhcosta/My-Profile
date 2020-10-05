import React from "react";

import Image from "../../assets/img/page404/cat.jpg";

function Page404() {
    return (
        <div className="page404-box">
            <h1>error 404</h1>
            <img className="cat-page404" src={ Image } alt="Gato em um papel alumínio chorando com um quadrado de manteiga em cima"/>
            <h2>not found</h2>
        </div>
    );
}

export default Page404;