import { FETCH_SUBJECTS } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return action.payload || false; // returns false when action.payload is ''
    default:
      return state;
  }
}
