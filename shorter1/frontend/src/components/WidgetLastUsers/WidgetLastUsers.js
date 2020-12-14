import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"
import {MdFace} from  'react-icons/md';
import API from '../../utils/API';

export default class WidgetLastUsers extends React.Component {
    constructor(props) {
        super(props);
        this.getLastUsers();

        this.state = {
           
        }

    }

    getLastUsers = async () => {
        try {
          const { data: listLastUsers } = await API.lastUser({});
          this.setState({ listLastUsers });
          //numberP = listProduct.count();
              
        } catch (error) {
          
          console.error(error);
        }  
      };


    render() {
        const { products, numberProduct} = this.props;
        const { listLastUsers } = this.state;

        var tampon = [];
        var user1 = []; 
        var user2 = []; 
        var user3 = [];
        
        if(listLastUsers != null)
          {
            const lastUserTab = listLastUsers
            lastUserTab.lastUsers.map(element => {
              
              tampon.push(element.firstname)
              tampon.push(element.lastname)
    
            });
            
            

          }
          var tutu = tampon[0]

        return (
            <div class='widget'>                
                
                <div class="text font-weight-bold text-info text-uppercase mb-1" >
                    LAST USERS
                </div>
                <div>
                <ul>
                    <li>
                        <div className = "face"><MdFace></MdFace>  {` ${tampon[0]}`}  {` ${tampon[1]}`}   </div>   
                    </li>
                    <li>
                        <div className = "face"><MdFace></MdFace>    {` ${tampon[2]}`}  {` ${tampon[3]}`} </div>   
                    </li>
                    <li>
                        <div className = "face"><MdFace></MdFace>   {` ${tampon[4]}`}  {` ${tampon[5]}`} </div>   
                    </li>
                </ul>
                
                
                </div>
                    
            </div>
        )              
    }
}