import React from 'react';
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'
import Test from '../../../test';

const Home = () => {
    var i = 5;
    var myStyle = {
        fontSize: 50,
        fontFamily: 'Courier',
        color: '#003300'
    }

    return (
        <div>
            <NavBar />
            <div className="container">
                <p className="text-danger" style={myStyle}>Add = {15 + 20}</p>
                <p className="text-info">Sub = {15 - 20}</p>
                <p className="text-success">Div = {15 / 20}</p>
                <p className="text-danger">Mul = {1 * 20}</p>
                <p className="text-danger">{i === 2 ? 'false' : 'true'}</p>
                <Test name="John" />
            </div>

            <Footer />
        </div>
    );
};

export default Home;