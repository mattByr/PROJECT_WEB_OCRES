import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
  
export default class WidgetLastUsers extends React.Component {
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
                
                <div class="text font-weight-bold text-primary text-uppercase mb-1" >
                    LAST USERS
                </div>
                <div>
                    
                </div>
                    
            </div>
        )              
    }
}