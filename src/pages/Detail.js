import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({ content }) => {
  const { id } = useParams();
  const apps = useSelector(state => state.apps);

  const submitLog = () => {
    fetch('/log.gif?action=button');
  };

  return (
    <div>
      <div>{id}</div>
      <div>{content}</div>
      <button onClick={submitLog}>submit error log</button>

      {JSON.stringify(apps)}
    </div>
  );
};

export default Detail;
