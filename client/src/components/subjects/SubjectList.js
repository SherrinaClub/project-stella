import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchSubjects } from '../../actions';

class SubjectList extends Component {
  componentDidMount() {
    this.props.searchSubjects();
  }

  renderSubjects() {
    return this.props.subjects.reverse().map(subject => {
      return (
        <div key={subject._id} className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title">{subject.transTitles}</span>
            <p>{subject.author}</p>
            <p className="right">status: {subject.status}</p>
          </div>
          <div className="card-action">
            <a>originalTitle: {subject.originalTitle}</a>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderSubjects()}</div>;
  }
}

function mapStateToProps({ subjects }) {
  return { subjects };
}

export default connect(mapStateToProps, { searchSubjects })(SubjectList);
