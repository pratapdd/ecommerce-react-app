import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Ecommerce Customer Interface</h1>

          <ProductList />

          <AddProduct />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
