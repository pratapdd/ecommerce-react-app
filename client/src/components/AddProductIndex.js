import React from 'react';
import { Link } from 'react-router';

import ProductList from './ProductList';
import AddProduct from './AddProduct';

export default () => {
  return (
      <div>
        <div className="header-color link-style">
          <Link to="/">
            Back
          </Link>
        </div>
        <div className="container">
          <div id="main" className="header-color">
            <h1>Admin Customer Interface</h1>
          </div>

          <AddProduct />

          <ProductList />
        </div>

      </div>
    );
}