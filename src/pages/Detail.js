import React from 'react';
import { useParams } from 'react-router-dom';

const Detail = ({ content }) => {
  const { id } = useParams();
  return <div>{id}</div>;
};

export default Detail;
