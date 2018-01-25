// SurveyField contains logic to render a single
// label and text input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  return (
    <div class="form-group">
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} class="form-control" />
      <p class="bg-danger" style={{ marginBottom: '20px' }}>
        {touched && error}
      </p>
    </div>
  );
};
