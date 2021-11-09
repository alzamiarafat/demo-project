import React, { Component } from 'react';  
class App extends Component{  
   render(){
      var myStyle = {  
        fontSize: 80,  
        fontFamily: 'Courier',  
        color: '#003300'  
      }  
      return(  
         <div>  
             <p className="text-danger" style={myStyle}>Add = {15+20}</p>
             <p className="text-info">Sub = {15-20}</p>
             <p className="text-success">Div = {15/20}</p>
             <p className="text-danger">Mul = {1*20}</p>
         </div>  
      );  
   }  
}  
export default App;  