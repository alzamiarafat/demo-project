import React from 'react';
import { Home } from './components/Layout/Home';
import Login from './components/Login/index';
import Register from './components/Register/index';
import Dashboard from './components/Dashboard/index';
import { Route, Routes, Navigate, useRoutes } from 'react-router-dom';
import Test from './test';
import UserList from './components/User/UserList';
import UserCreate from './components/User/UserCreate';
import UserRoutes from './components/User/Routes'
import { useAuth } from './contexts/Auth';
// import List from './components/Test/list';
import Rt, { route } from './components/Test/route';


export function AllRoutes() {

  const { currentUser } = useAuth();


  return useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    {
      path: '/dashboard/:id',
      element: currentUser ? <Dashboard /> : <Navigate to="/login" />,
      children: [
        { path: '/dashboard/:id/user/*', element: <UserRoutes /> }
      ]
    },
  ])

  // const { currentUser } = useAuth();

  // return (
  //   <>
  //     <Routes>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/login" element={currentUser ? <Navigate to="/dashboard" /> : <Login />} />
  //       <Route path="/register" element={<Register />} />
  //       <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to="/login" />} />
  //       <Route path="/users*" element={currentUser ? <UserList /> : <Navigate to="/login" />} />
  //       <Route path="/users/create" element={<UserCreate />} />
  //       {/* <Route path="/test" element={<Test />} /> */}
  //       <Route path="/test*" element={<Rt />} />
  //     </Routes>
  //   </>
  // );
};




