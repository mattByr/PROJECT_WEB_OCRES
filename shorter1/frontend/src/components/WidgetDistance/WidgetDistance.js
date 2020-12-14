import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import API from '../../utils/API';


  
export default class WidgetDistance extends React.Component {
    constructor(props) {
        super(props);
        this.getAvgDistance();

        this.state = {
           
        }

    }

    getAvgDistance = async () => {
        try {
          const { data: listAvgDistance } = await API.avgDistance({});
          this.setState({ listAvgDistance });
          //numberP = listProduct.count();
              
        } catch (error) {
          
          console.error(error);
        }  
      };

    render() {
        const {listAvgDistance} = this.state;

        var tampon = [];
        if(listAvgDistance != null)
      {
        const avgTab = listAvgDistance
        avgTab.avgProducts.map(element => {
          tampon.push(element._id)
          tampon.push(element.productAvg)

        });
      }
        return (
            <div class='widget'>                
                
                <div class="text font-weight-bold text-info text-uppercase mb-1" >
                    Average Distance
                </div>
                
                <div>
                <ul>
                    <li>
                        <div>  {`Category : ${tampon[0]}  |`}  {`Average distance : ${tampon[1]} km`}   </div>   
                    </li>
                    <li>
                        <div>  {`Category : ${tampon[2]}  |`}  {`Average distance : ${tampon[3]} km`} </div>   
                    </li>
                    <li>
                        <div > {`Category : ${tampon[4]}  |`}  {`Average distance : ${tampon[5]} km`} </div>   
                    </li>
                    <li>
                        <div > {`Category : ${tampon[6]}  |`}  {`Average distance : ${tampon[7]} km`} </div>   
                    </li>
                    <li>
                        <div > {`Category : ${tampon[8]}  |`}  {`Average distance : ${tampon[9]} km`} </div>   
                    </li>
                </ul>
                
                
                </div>
                    
            </div>
        )              
    }
}