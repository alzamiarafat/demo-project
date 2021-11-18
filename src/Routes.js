import React from 'react';
import { Home } from './components/Layout/Home';
import Login from './components/Login/index';
import Register from './components/Register/index';
import Dashboard from './components/Dashboard/index';
import { Route, Routes } from 'react-router-dom';
import Test from './test';
import UserList from './components/User/UserList';
import UserCreate from './components/User/UserCreate';
import AuthContextProvider, { useAuth } from './contexts/Auth';

// import List from './components/Test/list';
import Rt from './components/Test/route';
export const AllRoutes = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      {/* <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes> */}
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home currentUser={currentUser} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users*" element={<UserList />} />
          <Route path="/users/create" element={<UserCreate />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/test*" element={<Rt />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
};





