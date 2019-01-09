import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getBrandsQuery, addProductMutation, getProductsQuery } from '../queries/queries';

class AddProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      category: '',
      brandId: 'defaultBrandId',
      errors: {}
    };
  }

  displayBrands() {
    let { loading, brands: data } = this.props.getBrandsQuery;
    if (loading) {
      return ( <option disabled>Loading Brands</option> );
    } else {
      if (!data.some(data => data.id === 'defaultBrandId')) {
        data.unshift({ 'id': 'defaultBrandId',
                        'name': 'Select Brand'
                      });
      }
      return data.map(brand => {
        return (
          <option key={brand.id} value={brand.id}>{ brand.name }</option>
        )
      })
    }
  }

  handleValidation() {
    let formIsValid = true;
    let errors = {}
    let { name, category } = this.state;
    if (!name) {
      formIsValid = false;
      errors["name"] = "Name cannot be empty. "
    }

    if (!category) {
      formIsValid = false;
      errors["category"] = "Category cannot be empty. "
    }

    this.setState({errors: errors});

    return formIsValid;

  }

  submitForm(e) {
    // stop default form submit
    e.preventDefault();
    // First add component and refetch to update the list.
    if (this.handleValidation()) {
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
      this.setState({name: '', category: '', brandId: 'defaultBrandId'})
    } else {
      
    }
  }

  render() {
    return (
      <form id="add-product" onSubmit={ this.submitForm.bind(this) }>
        <span style={{color: "red"}}>{ this.state.errors["name"] }</span>
        <span style={{color: "red"}}>{ this.state.errors["category"]}</span>

        <div className="field">
          <label>Product name:</label>
          <input type="text" onChange={ (e) => this.setState({ name:e.target.value }) }
            value={this.state.name} />
        </div>

        <div className="field">
          <label>Product category:</label>
          <input type="text" onChange={ (e) => this.setState({ category:e.target.value }) }
            value={this.state.category} />
        </div>

        <div className="field">
          <label>Brand:</label>
          <select  onChange={ (e) => this.setState({ brandId:e.target.value }) }
            value={this.state.brandId}>
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