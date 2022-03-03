import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
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
    </div>
  );
};

Detail.getServerSideProps = () => {
  return {
    serverData: '一些服务端渲染的内容xxxxxxxxxxxx'
  };
};

export default Detail;
