import loadable from '@loadable/component';
import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Card = loadable(() => import('../components/Card.js'), { ssr: false });

const Detail = () => {
  const [show, setShow] = useState(false);
  const { name } = useParams();
  const serverData = useSelector(state => state.serverData);

  const submitLog = () => {
    new Image().src = '/log.gif?action=button';
  };

  const onShow = () => {
    setShow(true);
  };

  return (
    <div>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div>{name}</div>

      <h4>
        <strong style={{ color: 'red' }}>{serverData}</strong>
      </h4>
      <button onClick={onShow}>加载</button>
      {show && <Card />}

      <button onClick={submitLog}>上次错误日志</button>
    </div>
  );
};

Detail.getServerSideProps = () => {
  return {
    serverData: '懒加载组件'
  };
};

export default Detail;
