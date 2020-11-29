import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import LineGraph from './LineChart';


  
export default class WidgetNumberUsers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }


    render() {
        const { name} = this.props;
        return (
            <div class='widget'>                
                
                <div class="text font-weight-bold text-info text-uppercase mb-1" >
                    Users
                </div>
                <div>
                    <LineGraph></LineGraph>
                </div>
                    
            </div>
        )              
    }
}