import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';


import './index.css';
// import App from './App';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
})


ReactDOM.render(
    <ApolloProvider client={client}>

<Router history={browserHistory} routes={routes} />

</ApolloProvider>

, document.getElementById('root'));
