import React from 'react';
import { useRoutes } from 'react-router-dom';
import UserList from './UserList'
import UserCreate from './UserCreate';

export default function UserRoutes() {

  return useRoutes([
    {
      path: '/',
      element: <UserList />,
    },
    {
      path: '/create',
      element: <UserCreate />,
    },
  ])
};

