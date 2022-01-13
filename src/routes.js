import React from 'react';
import Detail from './pages/Detail';
import List from './pages/List';

const routes = [
  {
    path: '/',
    element: <List />
  },
  {
    path: '/detail/:name',
    element: <Detail />
  }
];

export default routes;
