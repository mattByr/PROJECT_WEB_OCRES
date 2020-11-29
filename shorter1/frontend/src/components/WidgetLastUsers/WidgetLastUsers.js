import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import {MdFace} from  'react-icons/md';
  
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
                
                <div class="text font-weight-bold text-info text-uppercase mb-1" >
                    LAST USERS
                </div>
                <div>
                <ul>
                    <li>
                        <div className = "face"><MdFace></MdFace>    Inès Belloir : il y a 20 minutes</div>   
                    </li>
                    <li>
                        <div className = "face"><MdFace></MdFace>    Matthieu Boyer : il y a 20 minutes</div>   
                    </li>
                    <li>
                        <div className = "face"><MdFace></MdFace>    Jean Dupont : il y a 20 minutes</div>   
                    </li>
                </ul>
                
                
                </div>
                    
            </div>
        )              
    }
}