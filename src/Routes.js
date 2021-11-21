import React from 'react';
import { Home } from './components/Layout/Home';
import Login from './components/Login/index';
import Register from './components/Register/index';
import Dashboard from './components/Dashboard/index';
import { Route, Routes, Navigate } from 'react-router-dom';
import Test from './test';
import UserList from './components/User/UserList';
import UserCreate from './components/User/UserCreate';
import { useAuth } from './contexts/Auth';
import "antd/dist/antd.css";


// import List from './components/Test/list';
import Rt, { route } from './components/Test/route';
export const AllRoutes = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={currentUser ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={currentUser ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/users*" element={<UserList />} />
        <Route path="/users/create" element={<UserCreate />} />
        {/* <Route path="/test" element={<Test />} /> */}
        <Route path="/test*" element={<Rt />} />
      </Routes>
    </>
  );
};





