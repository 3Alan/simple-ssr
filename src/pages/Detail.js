import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = ({ content }) => {
  const { id } = useParams();
  const submitLog = () => {
    fetch('/log.gif?action=button');
  };

  return (
    <div>
      <div>{id}</div>
      <div>{content}</div>
      <button onClick={submitLog}>submit error log</button>
    </div>
  );
};

export default Detail;
