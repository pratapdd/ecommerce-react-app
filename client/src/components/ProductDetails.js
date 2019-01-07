import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getProductQuery } from '../queries/queries';

class ProductDetails extends Component {

  displayProductDetails() {
    console.log('displayProductDetails-', this.props)
    const { product } = this.props.data;
    if (product) {
      return (
        <div>
          <h2>{ product.name }</h2>
          <p>{ product.category }</p>
          <p>{ product.brand.name }</p>
          <p>All Products by this brand:</p>
          <ul className="other-products">
            {
              product.brand.products.map(item => {
                return <li key={ item.id }>{item.name}</li>
              })
            }
          </ul>
        </div>
      );
    } else {
      return (
        <div>No product selected</div>
      )
    }
  }

  render() {
    console.log(this.props);
    return (
      <div id="product-details">
        { this.displayProductDetails() }
      </div>
    )
  }
}

export default graphql(getProductQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.productId
      }
    }
  }
})(ProductDetails);