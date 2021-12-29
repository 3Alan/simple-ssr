import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const dataList = [
  {
    name: 'detail1',
    id: 1,
    content: 'detail1 content'
  },
  {
    name: 'detail2',
    id: 2,
    content: 'detail2 content'
  },
  {
    name: 'detail3',
    id: 3,
    content: 'detail3 content'
  }
];

const List = () => {
  const [renderTip, setRenderTip] = useState('server render');

  useEffect(() => {
    setRenderTip('after hydrate client render');
  }, []);

  return (
    <>
      <p>
        查看源码的值为：server render，当前的值为：
        <strong style={{ color: 'red' }}>{renderTip}</strong>
      </p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {dataList.map(({ name, id }) => (
          <div key={id}>
            <Link to={`/detail/${id}`}>{name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;
