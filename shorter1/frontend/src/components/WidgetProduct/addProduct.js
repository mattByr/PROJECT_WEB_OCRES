import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css"

  
export default class WidgetProduct extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'white',
            title: 'title'
        }

    }

    refresh() {
        this.setState((prevState) => ({ backgroundColor: prevState.backgroundColor === 'white' ? 'black' : 'white' }))
    }

    render() {
        const { products, numberProduct} = this.props;
        const { backgroundColor } = this.state;
        return (
            <div class='widget'>                
                <div class='profile' style={{ background: backgroundColor, color: backgroundColor === 'white' ? 'black' : 'white' }}>
                <div class='title' >
                    PRODUCTS
                </div>
                <div class='profileInfo'>
                            {`Number of products : ${numberProduct}`}
                </div>
                <div>
            </div>
                    <Button text={'refresh'} onClick={this.refresh.bind(this)} style={{ alignSelf: 'flex-end' }} />
                </div>
            </div>)
    }
}