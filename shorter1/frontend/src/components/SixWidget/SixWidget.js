import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "../../index.css";
import ResponsiveContainer from "react-responsive-widget";

export default class SixWidget extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            backgroundColor: 'white',
            title: 'title'
        }

    }
    render() {
        return (
                <div className="app-row">
                    <div className="app-col-xs-12 app-col-md-4">.app-col-xs-12 .app-col-md-4</div>
                    <div className="app-col-xs-12 app-col-md-4">.app-col-xs-12 .app-col-md-4</div>
                    <div className="app-col-xs-12 app-col-md-4">.app-col-xs-12 .app-col-md-4</div>
                </div>
        )
    }
}
