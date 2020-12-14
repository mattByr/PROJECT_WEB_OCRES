import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import BarChart from './BarChart';
import "../WidgetNumberUsers/LineChart"
import LineGraph from '../WidgetNumberUsers/LineChart';
import API from '../../utils/API';


  
export default class WidgetNumberProducts extends React.Component {
    constructor(props) {
        super(props);
        this.getNumberProducts();

        this.state = {
           
        }

    }

    getNumberProducts = async () => {
        try {
          const { data: listProduct } = await API.numberProduct({});
          this.setState({ listProduct });
          //numberP = listProduct.count();
              
        } catch (error) {
          
          console.error(error);
        }  
      };

    render() {
        const { name} = this.props;
        const {listProduct} = this.state;
        return (
            <div class='widget'>                
                
                <div class="text font-weight-bold text-info text-uppercase mb-1" >
                    Products
                </div>
                
                <div>
                    <BarChart listProduct= {listProduct}></BarChart>
                </div>
                    
            </div>
        )              
    }
}