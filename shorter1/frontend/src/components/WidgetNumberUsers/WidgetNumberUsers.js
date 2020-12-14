import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import LineGraph from './LineChart';
import API from '../../utils/API';

  
export default class WidgetNumberUsers extends React.Component {
    constructor(props) {
        super(props);
        this.getNumberUsers();

        this.state = {
           
        }

    }

    getNumberUsers = async () => {
        try {
          const { data: listUser } = await API.numberUser({});
          this.setState({ listUser });
          //numberP = listProduct.count();
              
        } catch (error) {
          
          console.error(error);
        }  
      };


    render() {
        const { name} = this.props;
        const {listUser} = this.state;
        return (
            <div class='widget'>                
                
                <div class="text font-weight-bold text-primary text-uppercase mb-1" >
                    Users
                </div>
                <div>
                    <LineGraph listUser= {listUser}></LineGraph>
                </div>
                    
            </div>
        )              
    }
}