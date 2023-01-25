import React from "react";
import { 
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";

import Home from "./pages/home";
import Recipe from "./pages/recipe";

function Router(props) {
    return (  
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={ <Home/> }/>
                <Route exact path="/:id" element={ <Recipe/> }/>
                <Route exact path="/contato" element={ <Recipe/> }/>
                <Route exact path="/sobre" element={ <Recipe/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;