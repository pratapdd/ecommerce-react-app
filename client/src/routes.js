import React from 'react';
import { Route, IndexRoute } from 'react-router';

import HomeIndex from './components/HomeIndex';
import AddProductIndex from './components/AddProductIndex';


export default (
    <Route path="/">
      <IndexRoute component={HomeIndex}  />
      <Route path="/products/new" component={AddProductIndex} />
    </Route>
);