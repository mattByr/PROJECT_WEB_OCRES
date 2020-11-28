import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Dashboard } from "./components/dashboard/dashboard.js";
import { Login } from "./components/login/login.js";
import { Signup } from "./components/signUp/signUp.js";
import { PrivateRoute } from "./components/privateRoute.js";
import "./App.css";
import { fillDataBase } from "./components/fillDataBase/fillDataBase.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-content">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/fillDataBase" component={fillDataBase} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;