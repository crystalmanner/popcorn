/** @format */

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

import App from './App';
import Home from './components/Home';
import Products from './components/Products';
import About from './components/About';
import GlobalStyle from './global-style';

const Routes = () => (
  <BrowserRouter>
    <>
      <GlobalStyle />
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={Products} />
          {/* <Route exact path='/learn' component={Learn} /> */}
          <Route exact path="/about" component={About} />
        </Switch>
      </App>
    </>
  </BrowserRouter>
);

export default Routes;
