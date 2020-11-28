import React from "react";
import { Button } from "react-bootstrap";
import NotificationContainer from "react-notifications/lib/NotificationContainer";

import API from "../../utils/API";
import { Signup } from "../signUp/signUp";
import AddProduct from "./AddProduct";
//import Notification from "./Notification";

//import "../dashboard/css/sb-admin-2";


export class fillDataBase extends React.Component {
 

  render() {
    return (
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            
        </div>

        <div className="row">
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                        <AddProduct></AddProduct>
                        
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                        <Signup></Signup>
                        
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
<NotificationContainer></NotificationContainer>
      </div>
    );
  }
}