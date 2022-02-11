import { SET_PEOPLE_LIST } from './actions';

function peopleList(state = {}, action) {
  switch (action.type) {
    case SET_PEOPLE_LIST:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

export default peopleList;
