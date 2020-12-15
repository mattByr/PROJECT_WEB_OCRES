import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import {MdTimer} from  'react-icons/md';
import API from '../../utils/API';
import Countdown from './Countdown';
import moment from 'moment';
  
export default class WidgetChrono extends React.Component {
    constructor(props) {
        super(props);
        this.getTime();

        this.state = {
           
        }

    }

    getTime = async () => {
        try {
          var tampon ="1"
          const { data: timeMaj } = await API.getTime({tampon});
          this.setState({ timeMaj });
          //numberP = listProduct.count();
              
        } catch (error) {
          
          console.error(error);
        }  
      };


    render() {
        const { products, numberProduct} = this.props;
        const { timeMaj } = this.state;

        var tampon
        if(timeMaj != null)
        {
        const timeTab = timeMaj
        timeTab.time.map(element => {
            tampon = timeTab.time[0].timeMaj
            
        });
        }
        var test = new Date(tampon); 
        var format = "YYYY-MM-DD, hh:mm:ss"

        return (
            <div class='widget'>                
                
                <div class="text font-weight-bold text-success text-uppercase mb-1" >
                    CHRONO
                </div>
                <div>
                <Countdown timeTillDate={test} timeFormat="YYYY-MM-DD, hh:mm:ss" />
            
                </div>
                    
            </div>
        )     
    }
}