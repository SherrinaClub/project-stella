import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import subjectsReducer from './subjectsReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  subjects: subjectsReducer
});
