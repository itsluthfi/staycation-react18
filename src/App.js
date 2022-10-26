import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import CheckoutPage from "pages/CheckoutPage";
import Example from "pages/Example";
import NotFound from "pages/404";

import "assets/scss/style.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" element={LandingPage} />
          <Route exact path="/properties/:id" element={DetailsPage} />
          <Route path="/checkout" element={CheckoutPage} />
          <Route path="/example" element={Example} />
          <Route path="*" element={NotFound} />
        </Switch>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
