import React from "react";
import { Button } from "react-bootstrap";

import API from "../../utils/API";
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
        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>

        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>

        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>
        <WidgetProduct className="row_widget"></WidgetProduct>
       
        </div>
        <Button onClick={this.disconnect} block bsSize="large" type="submit">
          Se déconnecter
        </Button>
      </div>
    );
  }
}