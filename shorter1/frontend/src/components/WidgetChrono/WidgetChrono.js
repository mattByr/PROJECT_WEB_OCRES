import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"

import "./Stopwatch"
import Stopwatch from './Stopwatch';
import Timer from './Timer';

  
export default class WidgetChrono extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }


    render() {
        const { products, numberProduct} = this.props;
        const { backgroundColor } = this.state;
        return (
            <div class='widget'>                
                
                <div class="text font-weight-bold text-success text-uppercase mb-1" >
                    CHRONO
                </div>
                <div>
                <Timer></Timer>
                </div>
                    
            </div>
        )     
    }
}