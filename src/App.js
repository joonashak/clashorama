import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';


export default () => (
  <div>
    <Header />
    <Switch>
      <Route path="/player/:id" exact component={null} />
      <Route path="/" component={null} />
    </Switch>
  </div>
);
