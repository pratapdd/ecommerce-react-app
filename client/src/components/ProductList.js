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
          <li key={ product.id } onClick={(e) => { this.setState({ selected: product.id }) } }>{ product.name }</li>
        )
      })
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="product-list">
          { this.displayProducts() }
        </ul>
        <ProductDetails productId= { this.state.selected }/>
      </div>
    );
  }
}

export default graphql(getProductsQuery)(ProductList);
