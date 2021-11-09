import React, { Component } from 'react';
import Test from './test';
import Navbar from './components/layout/Navbar';
class App extends Component {
  render() {
    var i = 5;
    var myStyle = {
      fontSize: 80,
      fontFamily: 'Courier',
      color: '#003300'
    }
    return (
      <div>
        <Navbar />
        {/* <h4>Welcome {this.props.age}</h4> */}
        <p className="text-danger" style={myStyle}>Add = {15 + 20}</p>
        <p className="text-info">Sub = {15 - 20}</p>
        <p className="text-success">Div = {15 / 20}</p>
        <p className="text-danger">Mul = {1 * 20}</p>
        <p className="text-danger">{i === 2 ? 'false' : 'true'}</p>
        <Test name="John"/>
      </div>
    );
  }
}
// App.defaultProps = {  
//   age: "John"  
// }  
export default App;