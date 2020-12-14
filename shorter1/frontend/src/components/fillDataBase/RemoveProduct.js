import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import API from '../../utils/API';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
//import Notification from './Notification';


export default class RemoveProduct extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          idProduct: ""         
      }

  }

  send = async () => {
    const {  idProduct } = this.state;
    if (idProduct.length === 0) return;
    //if (!password || password.length === 0 || password !== cpassword) return;
    try {
      const { data } = await API.removeProduct({ idProduct });
      NotificationManager.success('Votre produit a bien été supprimé', 'BRAVO! ')
      
      
      //window.location = "/dashboard";
    } catch (error) {
            
        NotificationManager.error('Suppression impossible', 'MINCE! ')     
      
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
      
      const { idProduct } = this.state;
      return (
        
        <div class='widget'>
          <div class="text-center font-weight-bold text-success text-uppercase mb-1" >
                  Remove a product
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
        
        <div class=" btn btn-success  ">
          <Button onClick={this.send} block bsSize="large" type="submit">
          Remove a product
        </Button>
        </div>
      </div>
      
        );  
            
  }
}