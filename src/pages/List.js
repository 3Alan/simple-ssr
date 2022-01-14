import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';

const List = () => {
  const [renderTip, setRenderTip] = useState('server render');
  const apps = useSelector(state => state.apps);

  useEffect(() => {
    setRenderTip('after hydrate client render in useEffect');
  }, []);

  return (
    <>
      <Helmet>
        <title>List Page</title>
      </Helmet>
      <p>
        查看源码的值为：server render，当前的值为：
        <strong style={{ color: 'red' }}>{renderTip}</strong>
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4>data from server fetch</h4>
        {apps.map(({ name, id }) => (
          <div key={id}>
            <a href={`/detail/${name}`}>{name}</a>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
