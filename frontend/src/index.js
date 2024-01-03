import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import "./assets/styles/style.css";
// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";


// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

ReactDOM.render(
  <AlertProvider template={AlertTemplate} {...options}>
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}
        {/* <Route path="/landing" exact component={Landing} /> */}
        <Route path="/profile" exact component={Profile} />
        {/* <Route path="/" exact component={Index} /> */}
        {/* add redirect for first page */}
        <Redirect from="*" to="/auth" />
      </Switch>
    </BrowserRouter>
  </AlertProvider>,
  document.getElementById("root")
);
