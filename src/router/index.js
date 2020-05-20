import React, { Component } from "react";
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import Login from '../views/Login'
import Index from '../views/index'

export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />

          <Route
            path="/"
            render={() => {
              return localStorage.getItem("token") ? (
                <Index />
              ) : (
                <Redirect to="/login" />
              );
            }}
          />
        </Switch>
      </HashRouter>
    );
  }
}
