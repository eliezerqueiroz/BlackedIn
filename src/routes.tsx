import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import ProffyList from './pages/ProffyList';
import Form from './pages/Form';

function Routs(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/buscar" component={ProffyList} />
            <Route path="/cadastrar" component={Form} />

        </BrowserRouter>
    )
}

export default Routs;