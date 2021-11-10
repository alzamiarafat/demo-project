import React, { Component } from 'react';
import { Home } from './components/Layout/Home';
import { Login } from './components/Login';
import { Route, Switch, Redirect } from 'react-router-dom';



// export default class Routes extends Component {
//     render() {
//         return (
//             <div>
//                 <Home />
                
//             </div>
//         )
//     }
// }

export const Routes = () => {
    return (
      <div>
        {/* <Switch> */}
          <Route exact path="/home">
              <Home />
              </Route>
          {/* <Route exact path="/">
            <Redirect to="/home" />
          </Route> */}
          {/* <Route exact path="/login" component={Login} /> */}
        {/* </Switch> */}
      </div>
    );
  };





