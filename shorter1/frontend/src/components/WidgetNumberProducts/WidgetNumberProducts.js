import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import "../WidgetNumberUsers/LineChart"
import LineGraph from '../WidgetNumberUsers/LineChart';


  
export default class WidgetNumberProducts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }


    render() {
        const { name} = this.props;
        return (
            <div class='widget'>                
                
                <div class='title' >
                    Products
                </div>
                <div>
                    <LineGraph></LineGraph>
                </div>
                    
            </div>
        )              
    }
}