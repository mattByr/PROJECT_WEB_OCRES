import React from "react";
import { Button } from "react-bootstrap";

import API from "../../utils/API";
import WidgetChrono from "../WidgetChrono/WidgetChrono";
import WidgetDistribution from "../WidgetDistribution/WidgetDistribution";
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
<<<<<<< HEAD
        <div className="row_widgets">
        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>

        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>

        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>
       
        </div>
=======
        <WidgetProduct></WidgetProduct>
        <WidgetDistribution></WidgetDistribution>
        <WidgetChrono></WidgetChrono>
>>>>>>> 4c5f3130ae1481a14ec0104f3b015a0a4712db40
        <Button onClick={this.disconnect} block bsSize="large" type="submit">
          Se déconnecter
        </Button>
      </div>
    );
  }
}