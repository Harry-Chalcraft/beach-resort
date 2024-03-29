import React from 'react';
// import logo from './logo.svg';
import './App.css';

import { Route, Switch } from "react-router-dom";

import Home from "./Pages/Home"
import Rooms from "./Pages/Rooms"
import SingleRoom from "./Pages/SingleRoom"
import Error from "./Pages/Error"
import Navbar from "./Components/Navbar"


function App() {
  return (
    <>
    <Navbar/>
    <Switch>
      < Route exact path="/" component={Home}/>
      < Route exact path="/rooms" component={Rooms}/>
      < Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component ={Error}/>
    </Switch>


    </>
  );
}

export default App;
