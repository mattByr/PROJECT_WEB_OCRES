import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import BarChart from './BarChart';


  
export default class WidgetNumber extends React.Component {
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
                    {`Nombre: ${name}`}
                </div>
                <div>
                    <BarChart></BarChart>
                </div>
                    
            </div>
        )              
    }
}