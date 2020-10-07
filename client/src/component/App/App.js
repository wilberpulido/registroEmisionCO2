import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import TravelRegister from '../pages/TravelRegister/TravelRegister';
import ViewTravels from '../pages/ViewTravels/ViewTravels';
import './App.css';

function App(){
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/viewTravels" component={ViewTravels}/>
        <Route path="/travelRegister" component={TravelRegister}/>
        <Route path="/" component={HomePage}/>
      </Switch>
    </BrowserRouter>
    )
  }

export default App;
