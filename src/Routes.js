import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import TableLamps from "./components/TableLamps/TableLamps";


const Routes = () => {
  return ( 
    <Switch>
      <Route path="/table-lamps">
        <TableLamps />
      </Route>
      <Route path="/floor-lamps">
        Floor lamps
      </Route>
      <Route path="/exterior-ceiling">
        Exterior ceiling
      </Route>
      <Route path="/interior-ceiling">
        Interior ceiling
      </Route>
    </Switch>
  );
};

export default Routes;