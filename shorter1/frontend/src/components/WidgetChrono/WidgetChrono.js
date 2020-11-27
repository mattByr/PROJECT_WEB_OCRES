import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"

import "./Stopwatch"
import Stopwatch from './Stopwatch';

  
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
                
                <div class='title' >
                    CHRONO
                </div>
                <div>
                    <Stopwatch></Stopwatch>
                </div>
                    
            </div>
        )     
    }
}