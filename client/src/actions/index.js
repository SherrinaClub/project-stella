import axios from 'axios';
import { FETCH_USER, FETCH_SUBJECTS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitSubject = (values, history) => async dispatch => {
  const res = await axios.post('/api/createSubjects', values);

  history.push('/teamHome');
  dispatch({ type: FETCH_SUBJECTS, payload: res.data });
};
