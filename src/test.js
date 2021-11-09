import React, {Component} from "react";
import { ReactDOM } from "react-dom";
import App from "./App";


class Test extends Component {
    constructor(props){
        super(props)
        this.state = { display: false}
        this.toggleDisplay = this.toggleDisplay.bind(this)
    };

    toggleDisplay() {
        this.setState({display: !this.state.display})
    };

    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h1>
                    {!this.state.display ? (<button className="btn btn-success" onClick={this.toggleDisplay}>More</button>) : (<button className="btn btn-warning" onClick={this.toggleDisplay}>Less</button>)}
                </h1>
            </div>
        );
    }
}

// ReactDOM.render(<App age="12" />, document.getElementById('app'));  

export default Test;
