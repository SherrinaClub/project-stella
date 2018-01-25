import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SubjectField from './SubjectField';
import formFields from './formFields';

class SubjectForm extends Component {
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      return (
        <Field
          key={name}
          label={label}
          type="text"
          name={name}
          component={SubjectField}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSubjectSubmit)}>
          {this.renderFields()}
          <Link to="/teamHome">
            <button class="btn btn-danger btn-lg">Cancel</button>
          </Link>
          <button type="submit" class="btn btn-success btn-lg">
            Next
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = '你必须提供 ' + name;
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'subjectForm',
  destroyOnUnmount: false
})(SubjectForm);
