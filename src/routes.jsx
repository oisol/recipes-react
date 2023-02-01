import React from "react";
import { 
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import Home from "./pages/home";
import Recipe from "./pages/recipe";
import Contact from "./pages/contact"
import Article from "./pages/article";

function Router(props) {
    return (  
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home/> }/>
                <Route exact path="/:id" element={ <Recipe/> }/>
                <Route exact path="/contato" element={ <Contact /> }/>
                <Route exact path="/artigo" element={ <Article /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;