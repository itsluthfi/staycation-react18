import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={LandingPage}></Route>
          <Route path="/details/:id" component={DetailsPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
