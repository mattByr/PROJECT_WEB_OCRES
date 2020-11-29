import React from "react";
import { Button } from "react-bootstrap";
import NotificationContainer from "react-notifications/lib/NotificationContainer";

import API from "../../utils/API";
import { Signup } from "../signUp/signUp";
import AddProduct from "./AddProduct";
//import Notification from "./Notification";

import "../dashboard/css/sb-admin-2.css";


export class fillDataBase extends React.Component {
 

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
                <div class="col-xl-6 col-lg-6 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                <div class="text-center">
                                  <AddProduct className="row_widget"></AddProduct>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
          
                <div class="col-xl-6 col-lg-6 col-md-6 mb-4">
                  <div class="card border-left-primary shadow h-100 py-2">
                      <div class="card-body">
                          <div class="row no-gutters align-items-center">
                              <div class="col mr-2">
                                <div class="text-center">
                                  <Signup className = "row_widget"></Signup>
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>

        </div>
<NotificationContainer></NotificationContainer>
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