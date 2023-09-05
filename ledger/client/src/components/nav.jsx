// In any component where you want to create a link
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/create-account">Create Account</Link>
        </li>
        <li>
          <Link to="/">Account List</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
