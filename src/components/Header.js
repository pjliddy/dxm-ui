import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to="/">
        Content List
      </Link>
      <span> | </span>
      <Link to="/content/edit">
        Edit
      </Link>
      <span> | </span>
      <Link to="/content/new">
        New
      </Link>
    </div>
  );
}

export default Header;
