import React from "react";
import { Button } from "react-bootstrap";

import API from "../../utils/API";
import AddProduct from "./AddProduct";

import "./css/sb-admin-2.css";


export class fillDataBase extends React.Component {
  disconnect = () => {
    API.logout();
    window.location = "/";
  };

  render() {
    return (
      <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Fill the data base</h1>
        </div>

        <div className="row">
          
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                    <div class="row no-gutters align-items-center">
                        <div class="col mr-2">
                        COucOU
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
         
        
        </div>
      </div>
    );
  }
}