import React, { Component, useState } from 'react';
import AuthContextProvider from './contexts/Auth';
import { AllRoutes } from './Routes';
import "antd/dist/antd.css";
function App () {
    
    return (
      <>
        <AuthContextProvider>
          <AllRoutes />
        </AuthContextProvider>
      </>
    );
}
// App.defaultProps = {  
//   age: "John"  
// }  
export default App;