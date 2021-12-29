import React from 'react';
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
  return (
    <>
      {dataList.map(({ name, id }) => (
        <Link to={`/detail/${id}`}>{name}</Link>
      ))}
    </>
  );
};

export default List;
