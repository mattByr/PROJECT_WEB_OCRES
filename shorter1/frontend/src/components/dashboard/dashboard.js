import React from "react";
import { Button } from "react-bootstrap";

import API from "../../utils/API";
import WidgetChrono from "../WidgetChrono/WidgetChrono";
import WidgetDistribution from "../WidgetDistribution/WidgetDistribution";
import WidgetNumberUsers from "../WidgetNumberUsers/WidgetNumberUsers";
import WidgetNumberProducts from "../WidgetNumberProducts/WidgetNumberProducts"
//import fillDataBase from "../fillDataBase/fillDataBase"


import SocialMediaButtons from "../WidgetDistance/WidgetDistance";
import WidgetLastUsers from "../WidgetLastUsers/WidgetLastUsers";
import WidgetDistance from "../WidgetDistance/WidgetDistance";


export class Dashboard extends React.Component {
disconnect = () => {
  API.logout();
  window.location = "/";
};

addProduct = () => {
  
  window.location = "/fillDataBase";
};

render() {
  return (
    <body id="page-top">
      <div id="wrapper">
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
              <div class="navbar-collapse collapse">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <div class="d-sm-flex align-items-center justify-content-between ">
                      <h1 class="h3  text-gray-800">Dashboard</h1>
                    </div>
                      
                  </li>
                </ul>
                <ul class="navbar-nav">
                  <li class="nav-item">
                    
                    <div class="btn btn-primary">
                      <Button onClick={this.addProduct} block bsSize="small" >
                        Add
                      </Button>
                    </div>
              
                    <div class=" btn btn-secondary">
                      <Button onClick={this.disconnect} block bsSize="small" >
                        Disconnect
                      </Button>
                    </div>          
                  </li>
                </ul>
              </div>
              
            </nav>

            <div class="container-fluid">

              <div className="row">

                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <WidgetDistribution className="row_widget"></WidgetDistribution>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters  align-items-center">
                        <div class="col mr-2">
                        <div class= "align-items-center justify-content-between ">
                          <WidgetChrono className="row_widget"></WidgetChrono>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                          <div class="col mr-2"> 
                            <WidgetNumberProducts className="row_widget"></WidgetNumberProducts>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>

              </div>

              <div className="row">
                <div class="col-lg col-md mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <WidgetNumberUsers className="row_widget"></WidgetNumberUsers>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">

                <div class="col-xl-6 col-lg-6 col-md-6 mb-4">
                  <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <WidgetDistance className="row_widget"></WidgetDistance>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6 mb-4">
                  <div class="card border-left-info shadow h-100 py-2">
                    <div class="card-body">
                      <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                          <WidgetLastUsers className="row_widget"></WidgetLastUsers>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer class="sticky-footer bg-white">
            <div class="container my-auto">
              <div class="copyright text-center my-auto">
                  <span>Dashboard &copy;Projet Shorter 2021</span>
              </div>
            </div>
          </footer>
        
        </div>
      </div>
    </body>
  );
}
}