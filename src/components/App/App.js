import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import "./App.scss";
import TopBar from '../TopBar/TopBar.jsx';
import Routes from '../../Routes';


function App() {
  return (
    <Router>
      <TopBar />
        <main className="Main">
          <div className="Main_Container Container">
            <NavLink className="TableLamps" to="/table-lamps">Table lamps</NavLink>
            <NavLink className="FloorLamps" to="/floor-lamps">floor lamps</NavLink>
            <NavLink className="ExteriorCeiling" to="/exterior-ceiling">exterior ceiling</NavLink>
            <NavLink className="InteriorCeiling" to="/interior-ceiling">interior ceiling</NavLink>
          </div>
        </main>
      <Routes />
    </Router>
  );
}

export default App;
