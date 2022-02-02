import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { name } = useParams();
  const serverData = useSelector(state => state.serverData);

  const submitLog = () => {
    new Image().src = '/log.gif?action=button';
  };

  return (
    <div>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div>{name}</div>

      <h4>
        <strong style={{ color: 'red' }}>{serverData}</strong>{' '}
      </h4>
      <button onClick={submitLog}>submit error log</button>
    </div>
  );
};

Detail.getServerSideProps = () => {
  return {
    serverData: 'content init from serverSide'
  };
};

export default Detail;
