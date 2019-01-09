import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductsQuery } from '../queries/queries';
import ProductDetails from './ProductDetails';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null
    }
  }

  displayProducts() {
    let data = this.props.data;
    if (data.loading) {
      return (<div>Loading products</div>);
    } else {
      return data.products.map(product => {
        return (
          <li key={ product.id } onClick={(e) => { this.setState({ selected: product.id }) } }>
          <div class="card-container">
            <div class="product-name">  
              { product.name }
            </div>
            <div class="product-category">
                  { product.category }
            </div>
            <div class="product-category">
                  <button class="add-to-cart-btn"> Add to Cart </button>
            </div>
          </div>
          </li>
        )
      })
    }
  }

  render() {
    return (
      <div>
        <ul id="product-list">
          { this.displayProducts() }
        </ul>
        {/* <ProductDetails productId= { this.state.selected }/> */}
      </div>
    );
  }
}

export default graphql(getProductsQuery)(ProductList);
