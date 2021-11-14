import React, { Component } from "react";
import SideBar from "./components/Layout/SideBar/SideBar";
import axios from "axios";
import swal from 'sweetalert';

class Test extends Component {

    constructor(props) {
        super(props)
        this.state = { display: false, }
        this.toggleDisplay = this.toggleDisplay.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    toggleDisplay() {
        this.setState({ display: !this.state.display })
    };

    handleChange(event) {
        this.setState({
            email: event.target.email,
            password: event.target.password
        })
    }

    formSubmit(event) {
        event.preventDefault()
        const data = new FormData(event.target);
        const email = data.get('email');
        const username = data.get('username');
        const password = data.get('password');

        axios.post(`https://6190abddf6bf450017484c7d.mockapi.io/fakeData`, { username, email, password }).then(() => {
            swal("Good job!", "You clicked the button!", "success");
            event.target.reset();
            // console.log(useNavigate())
            // useNavigate('/dashboard')
        })
    }

    render() {
        var i = 5;
        var myStyle = {
            fontSize: 50,
            fontFamily: 'Courier',
            color: '#003300'
        }
        return (
            <div className="container-fluid">
                <div className="row flex-nowrap">
                    <SideBar />
                    <div className="col py-3">
                        <form className="card" onSubmit={this.formSubmit}>
                            <div className="card-body">
                                <legend>Create User</legend>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputUsername" className="form-label">User Name</label>
                                    <input type="text" className="form-control" name="username" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" name="password" />
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>

                        <div className="card mt-3">
                            <div className="card-body">
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
