import React from "react";
import "./global.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/Main";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Contact from "./pages/Contact/Contact";
import Page404 from "./pages/Page404/Page404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/sobre-mim" component={About}/>
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/contato" component={Contact}/>
        <Route path="/pagina-nao-encontrada" component={Page404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;