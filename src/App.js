import React, { useState, useEffect } from "react";
import Shortner from "./Shortner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Shortner} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
