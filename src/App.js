import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import NavbarTest from './Components/NavbarTest'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home"
import Drivers from "./Pages/Drivers"
import Cars from "./Pages/Cars"
import Map from "./Pages/Map"
import Support from "./Pages/Support"




function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Drivers" exact component={Drivers} />
          <Route path="/Cars" exact component={Cars} />
          <Route path="/Map" exact component={Map} />
          <Route path="/Support" exact component={Support} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
