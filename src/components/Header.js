import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui menu">
      <Link to="/" className="item">
        Content List
      </Link>
      <Link to="/content/new" className="item">
        New
      </Link>
    </div>
  );
}

export default Header;
