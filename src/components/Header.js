import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="ui stackable main menu">
      <div className="header item">
        Digital eXperience Manager
      </div>
      <div className="right menu">
        <Link to='/' className="item">
          Content
        </Link>
        <Link to='/assets' className="item">
          Assets
        </Link>
      </div>
    </div>
  );
}

export default Header;
