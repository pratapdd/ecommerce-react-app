import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getBrandsQuery, addProductMutation, getProductsQuery } from '../queries/queries';

class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      brandId: ''
    };
  }

  displayBrands() {
    let data = this.props.getBrandsQuery;
    console.log(this.props);
    if (data.loading) {
      return ( <option disabled>Loading Brands</option> );
    } else {
      console.log('else-', data);
      return data.brands.map(brand => {
        return (<option key={brand.id} value={brand.id}>{ brand.name }</option>)
      })
    }
  }

  submitForm(e) {
    e.preventDefault();
    //First add component and refetch to update the list.
    
    console.log('submitForm-', this.state);
    this.props.addProductMutation({
      variables: {
        name: this.state.name,
        category: this.state.category,
        brandId: this.state.brandId
      },
      refetchQueries: [{
        query: getProductsQuery
      }]
    });
  }

  render() {
    return (
      <form id="add-product" onSubmit={ this.submitForm.bind(this) }>

        <div className="field">
          <label>Product name:</label>
          <input type="text" onChange={ (e) => this.setState({ name:e.target.value }) } />
        </div>

        <div className="field">
          <label>Product category:</label>
          <input type="text" onChange={ (e) => this.setState({ category:e.target.value }) } />
        </div>

        <div className="field">
          <label>Brand:</label>
          <select onChange={ (e) => this.setState({ brandId:e.target.value }) }>
            <option>Select Brand</option>
            { this.displayBrands() }
          </select>
        </div>

        <button>+</button>

      </form>
    );
  }
}

export default compose(
  graphql(getBrandsQuery, {name: "getBrandsQuery"}),
  graphql(addProductMutation, {name: "addProductMutation"})
)(AddProduct);