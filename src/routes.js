import React from 'react';
// import Detail from './pages/Detail';
import List from './pages/List';
import loadable from '@loadable/component';

const Detail = loadable(() => import('./pages/Detail'));

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
