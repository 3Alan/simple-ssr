import loadable from '@loadable/component';
import React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Card = loadable(() => import('../components/Card.js'));

const Detail = () => {
  const [show, setShow] = useState(false);
  const { name } = useParams();
  const serverData = useSelector(state => state.serverData);

  const submitLog = e => {
    new Image().src = `/log.gif?action=点击位置：${JSON.stringify(
      e.target.getBoundingClientRect()
    )}`;
  };

  const catchErrorMessage = () => {
    // eslint-disable-next-line no-undef
    console.log(b);
  };

  const catchPromiseErrorMessage = () => {
    new Promise(() => {
      // eslint-disable-next-line no-undef
      console.log(c);
    });
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
      <button onClick={submitLog}>埋点上报</button>
      <button onClick={catchErrorMessage}>收集普通错误</button>
      <button onClick={catchPromiseErrorMessage}>收集 Promise 错误</button>
      <button onClick={onShow} onMouseOver={() => {
        Card.preload()
      }}>鼠标悬浮时组件懒加载</button>
      {show && <Card />}
    </div>
  );
};

Detail.getServerSideProps = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        serverData: '懒加载组件'
      });
    }, 1000);
  });
};

export default Detail;
