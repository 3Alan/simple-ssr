import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import { getPeopleList } from '../redux/actions';

const List = () => {
  const { peopleList = [], tip } = useSelector(state => state);
  const [renderTip, setRenderTip] = useState(tip);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPeopleList());
    setRenderTip('客户端数据');
  }, []);

  return (
    <>
      <Helmet>
        <title>List Page</title>
      </Helmet>
      <p>
        查看源码的值为：服务端数据，当前的值为：
        <strong style={{ color: 'red' }}>{renderTip}</strong>
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h4>下面是客户端渲染的列表</h4>
        {peopleList.map(({ name, id }) => (
          <div key={id}>
            <a href={`/detail/${name}`}>{name}</a>
          </div>
        ))}
      </div>
    </>
  );
};

List.getServerSideProps = () => {
  return {
    tip: '服务端数据'
  };
};

export default List;
