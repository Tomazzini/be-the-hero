import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon'; // login
import Register from './pages/Register'; // cadastro da ong
import Profile from './pages/Profile'; // perfil
import NewIncident from './pages/newIncident'; // cadastrar novos casos

// <Route path="/" component={Logon}/>
export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Logon} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/incident" component={NewIncident} />
        </Switch>
        </BrowserRouter>
    )
}

