import axios from 'axios';

export const SET_PEOPLE_LIST = 'SET_PEOPLE_LIST';

function setPeopleList(payload) {
  return {
    type: SET_PEOPLE_LIST,
    payload
  };
}

export function getPeopleList() {
  return async dispatch => {
    const res = await axios('/assets/data.json');
    dispatch(setPeopleList({ peopleList: res.data }));
  };
}
