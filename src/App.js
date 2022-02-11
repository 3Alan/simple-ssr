import React from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';

function App() {
  const element = useRoutes(routes);
  if (!element) {
    return <div>404</div>;
  }

  return (
    <>
      <div>Common Navigator</div>
      {element}
    </>
  );
}

export default App;
