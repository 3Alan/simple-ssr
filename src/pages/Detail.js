import React from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { name } = useParams();

  const submitLog = () => {
    fetch('/log.gif?action=button');
  };

  return (
    <div>
      <Helmet>
        <title>{name}</title>
      </Helmet>
      <div>{name}</div>
      <button onClick={submitLog}>submit error log</button>
    </div>
  );
};

export default Detail;
