import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { fetchAppsIfNeeded } from './redux/actions';
import routes from './routes';

function App() {
  const element = useRoutes(routes);
  const dispatch = useDispatch();
  const { isFetching, apps } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchAppsIfNeeded());
  }, []);

  if (!element) {
    return <div>404</div>;
  }

  return (
    <>
      {isFetching && apps.length === 0 && <h2>Loading...</h2>}
      {!isFetching && apps.length === 0 && <h2>Empty.</h2>}
      <div>Navigator</div>
      {element}
    </>
  );
}

export default App;
