import React from "react";
import { 
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import Home from "./pages/home";
import Recipe from "./pages/recipe";
import About from "./pages/about"
import Contact from "./pages/contact"

function Router(props) {
    return (  
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home/> }/>
                <Route exact path="/:id" element={ <Recipe/> }/>
                <Route exact path="/contato" element={ <Contact /> }/>
                <Route exact path="/sobre" element={ <About /> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;