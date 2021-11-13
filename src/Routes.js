import React, { Component } from 'react';
import { Home } from './components/Layout/Home';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Routes, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Test from './test';

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test" element={<Test />} />
      </Routes>

    </div>
  );
};





