import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import API from '../../utils/API';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
//import Notification from './Notification';


export default class AddProduct extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          idProduct: "",
          name: "",
          category: "", 
          distance: ""           
      }

  }

  send = async () => {
    const {  idProduct, name, category, distance } = this.state;
    if (idProduct.length === 0) return;
    //if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.addProduct({ idProduct, name, category, distance });
      NotificationManager.success('Votre produit a bien été ajouté', 'BRAVO! ')
      
      
      //window.location = "/dashboard";
    } catch (error) {
      if(error.response.status == "400")
      {       
          NotificationManager.warning('Votre produit existe déjà', 'MINCE! ')     
      }
      else{        
        NotificationManager.error('Ajout impossible', 'MINCE! ')     
      }
      console.error(error);
    }

  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  




  render() {
      const { products, numberProduct} = this.props;
      
      const { idProduct, name, category, distance } = this.state;
      return (
        
        <div className="Login">
          <div class="text font-weight-bold text-success text-uppercase mb-1" >
                  Add a product
              </div>
        <FormGroup controlId="idProduct" bsSize="large">
          <ControlLabel>idProduct</ControlLabel>
          <FormControl
            autoFocus
            type="idProduct"
            value={idProduct}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="name" bsSize="large">
          <ControlLabel>name</ControlLabel>
          <FormControl
            value={name}
            onChange={this.handleChange}
            type="name"
          />
        </FormGroup>
        <FormGroup controlId="category" bsSize="large">
          <ControlLabel>category</ControlLabel>
          <FormControl
            value={category}
            onChange={this.handleChange}
            type="category"
          />
        </FormGroup>
        <FormGroup controlId="distance" bsSize="large">
          <ControlLabel>distance</ControlLabel>
          <FormControl
            value={distance}
            onChange={this.handleChange}
            type="distance"
          />
        </FormGroup>
        <div class=" btn btn-success  ">
          <Button onClick={this.send} block bsSize="large" type="submit">
          Add a product
        </Button>
        </div>
      </div>
      
        );  
            
  }
}