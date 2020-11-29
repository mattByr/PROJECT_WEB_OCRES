import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import BarChart from './BarChart';
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
                
                <div class="text font-weight-bold text-info text-uppercase mb-1" >
                    Products
                </div>
                
                <div>
                    <BarChart></BarChart>
                </div>
                    
            </div>
        )              
    }
}