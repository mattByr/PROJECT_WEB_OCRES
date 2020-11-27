import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"

  
export default class AddProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }

    }


    render() {
        const { products, numberProduct} = this.props;
        const { backgroundColor } = this.state;
        return (
            <form>
            <h1>Hello</h1>
            <p>Enter your name, and submit:</p>
            <input
              type='text'
            />
            <input
              type='submit'
            />
            </form>
          );      
    }
}