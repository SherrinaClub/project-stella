// show and update form and formRview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SubjectForm from './SubjectForm';
import SubjectFormReview from './SubjectFormReview';

class SubjectNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SubjectFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <SubjectForm
        onSubjectSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'subjectForm'
})(SubjectNew);
