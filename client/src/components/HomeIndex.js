import React from 'react';
import { Link } from 'react-router';

import Home from './Home';

export default () => {
  return (
      <div>
        <div className="header-color link-style">
          <Link to="/products/new">
            Admin Portal
          </Link>
        </div>
        <Home/>
      </div>
    );
}