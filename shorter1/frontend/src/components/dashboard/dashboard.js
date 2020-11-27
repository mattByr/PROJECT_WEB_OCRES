import React from "react";
import { Button } from "react-bootstrap";

import API from "../../utils/API";
import WidgetChrono from "../WidgetChrono/WidgetChrono";
import WidgetDistribution from "../WidgetDistribution/WidgetDistribution";
import WidgetNumber from "../WidgetNumber/WidgetNumber";
import WidgetProduct from "../WidgetProduct/addProduct";

import "./dashboard.css";

export class Dashboard extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      
      <div className="row">
        <h1>Dashboard</h1>
        <div className="row_widgets">
        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetDistribution className="row_widget"></WidgetDistribution>
        <WidgetChrono className="row_widget"></WidgetChrono>
        <WidgetNumber name={"Users"} className="row_widget"></WidgetNumber>
        <WidgetNumber name={"Products"} className="row_widget"></WidgetNumber>

       
        </div>


        <Button onClick={this.disconnect} block bsSize="large" type="submit">
          Se déconnecter
        </Button>
      </div>
    );
  }
}