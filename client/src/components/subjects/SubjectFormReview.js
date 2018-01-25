// show the user review for input
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

const SubjectFormReview = ({
  onCancel,
  formvalues,
  submitSubject,
  history
}) => {
  const reviewFields = _.map(formFields, ({ label, name }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formvalues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please confirm your entries</h5>
      {reviewFields}
      <button class="btn btn-warning" onClick={onCancel}>
        Back
      </button>
      <button
        class="btn btn-success"
        onClick={() => submitSubject(formvalues, history)}
      >
        Sumbit
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formvalues: state.form.subjectForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SubjectFormReview));
