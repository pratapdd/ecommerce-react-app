import React, { Component } from 'react';

import ProductList from './ProductList';
import AddProduct from './AddProduct';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div id="main" className="header-color">
          <h1>Ecommerce Customer Interface</h1>
        </div>
        <ProductList />
      </div>
    );
  }
}

export default App;
