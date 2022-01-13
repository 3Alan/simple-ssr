import React from 'react';
import Detail from './pages/Detail';
import List from './pages/List';

const routes = [
  {
    path: '/list',
    element: <List />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  }
];

export default routes;
