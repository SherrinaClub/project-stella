import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <div className="fixed-action-btn">
        <Link to="/subjects/new">
          <button class="btn btn-danger btn-lg">Add</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
