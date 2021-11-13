import React, { Component } from "react";
import SideBar from "./components/Layout/SideBar/SideBar";

class Test extends Component {

    constructor(props) {
        super(props)
        this.state = { display: false }
        this.toggleDisplay = this.toggleDisplay.bind(this)
    };

    toggleDisplay() {
        this.setState({ display: !this.state.display })
    };

    render() {
        var i = 5;
        var myStyle = {
            fontSize: 50,
            fontFamily: 'Courier',
            color: '#003300'
        }
        return (
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <SideBar />
                    <div class="col py-3">
                        <div>
                            <div className="container">
                                <p className="text-danger" style={myStyle}>Add = {15 + 20}</p>
                                <p className="text-info">Sub = {15 - 20}</p>
                                <p className="text-success">Div = {15 / 20}</p>
                                <p className="text-danger">Mul = {1 * 20}</p>
                                <p className="text-danger">{i === 2 ? 'false' : 'true'}</p>
                                <h2>{this.props.name}</h2>
                                <h1>
                                    {!this.state.display ? (<button className="btn btn-success" onClick={this.toggleDisplay}>More</button>) : (<button className="btn btn-warning" onClick={this.toggleDisplay}>Less</button>)}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;
