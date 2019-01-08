import React from 'react';
import { Link } from 'react-router';

import App from '../components/App';

export default () => {
  return (
      <div>
        <div className="header-color link-style">
          <Link to="/products/new">
            Admin Portal
          </Link>
        </div>
        <App/>
        
      </div>
    );
}