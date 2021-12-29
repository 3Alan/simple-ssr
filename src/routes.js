import Detail from './pages/Detail';
import List from './pages/List';

export default [
  {
    path: '/list',
    exact: true,
    component: List
  },
  {
    path: '/detail/:id',
    exact: true,
    component: Detail
  }
];
