import React, { Component } from 'react';
import AuthContextProvider from './contexts/Auth';
import { AllRoutes } from './Routes';
class App extends Component {
  render() {
    return (
      <>
        <AuthContextProvider>
          <AllRoutes />
        </AuthContextProvider>
      </>
    );
  }
}
// App.defaultProps = {  
//   age: "John"  
// }  
export default App;