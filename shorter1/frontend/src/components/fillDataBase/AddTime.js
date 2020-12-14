import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import API from '../../utils/API';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
//import Notification from './Notification';


export default class AddTime extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          idTime: "",
          timeMaj: ""           
      }

  }

  send = async () => {
    const {  idTime, timeMaj } = this.state;
    if (idTime.length === 0) return;
    if (timeMaj.length === 0) return;
    try {
      const { data } = await API.addTime({ idTime, timeMaj });
      NotificationManager.success('Votre maj a bien été ajoutée', 'BRAVO! ')
      
      
      //window.location = "/dashboard";
    } catch (error) {
      /*if(error.response.status == "500")
      { */      
        NotificationManager.error('Ajout impossible', 'MINCE! ')     
      //}
      console.error(error);
    }

  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  




  render() {
      //const { products, numberProduct} = this.props;
      
      const { idTime, timeMaj} = this.state;
      return (
        
        <div class='widget'>
          <div class="text-center font-weight-bold text-success text-uppercase mb-1" >
                  Add Maj
              </div>
        <FormGroup controlId="idTime" bsSize="large">
          <ControlLabel>idTime</ControlLabel>
          <FormControl
            autoFocus
            type="idTime"
            value={idTime}
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="timeMaj" bsSize="large">
          <ControlLabel>date</ControlLabel>
          <FormControl
            value={timeMaj}
            onChange={this.handleChange}
            type="date"
          />
        </FormGroup>
        
        <div class=" btn btn-success  ">
          <Button onClick={this.send} block bsSize="large" type="submit">
          Add a new maj
        </Button>
        </div>
      </div>
      
        );  
            
  }
}