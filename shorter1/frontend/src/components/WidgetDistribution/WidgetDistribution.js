import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import API from '../../utils/API';
import "./PieDoughnut"
import PieChart from './PieDoughnut';

  
export default class WidgetDistribution extends React.Component {
    constructor(props) {
        super(props);

        this.getNumberPerCategory();

        this.state = {
            
        }

    }

    getNumberPerCategory = async () => {
      

        try {
          const { data: numberPerCategory } = await API.numberPerCategory({});
          this.setState({ numberPerCategory });


        } catch (error) {
          
          console.error(error);
        }
      
      };

      

    render() {
        const {numberPerCategory} = this.state;    
        
        return (
            <div class='widget'>                
                
                <div class="text font-weight-bold text-primary text-uppercase mb-1" >
                    PRODUCTS DISTRIBUTION
                </div>
                <div>
                    <PieChart numberPerCategory={numberPerCategory}></PieChart>
                </div>
                    
            </div>
        )             
    }
}