import React, { Component } from 'react';
import { Home } from './components/Layout/Home';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes, BrowserRouter, Switch, Redirect } from 'react-router-dom';



// export default class Routes extends Component {
//     render() {
//         return (
//             <div>
//                 <Home />

//             </div>
//         )
//     }
// }

export const AllRoutes = () => {
  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
};





