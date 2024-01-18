// routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MapaGeneral from './Pages/MapaGeneral';
import ArriboC from './Pages/ArriboC';
import ArriboI from './Pages/ArriboI';
import EmbarC from './Pages/EmbarC';
import EmbarI from './Pages/EmbarI';
import HallCabo from './Pages/HallCabo';
import Hallinter from './Pages/Hallinter';
import Over from './Pages/Over';
import PlantaA from './Pages/PlantaA';
import Puerta7 from './Pages/Puerta7';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MapaGeneral} />
        <Route path="/ArriboC" component={ArriboC} />
        <Route path="/ArriboI" component={ArriboI} />
        <Route path="/EmbarC" component={EmbarC} />
        <Route path="/EmbarI" component={EmbarI} />
        <Route path="/HallCabo" component={HallCabo} />
        <Route path="/Hallinter" component={Hallinter} />
        <Route path="/Over" component={Over} />
        <Route path="/PlantaA" component={PlantaA} />
        <Route path="/Puerta7" component={Puerta7} />
     
      </Switch>
    </Router>
  );
};

export default Routes;
