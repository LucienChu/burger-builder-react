import React from 'react';
import Layout from "./components/layouts/Layout"
import BurgerBuilder from './containers/burger builder/BurgerBuilder';
import Checkout from './containers/checkout/checkout';
import Orders from "./containers/orders/orders";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/" component={BurgerBuilder} />
      </Switch>
    </Layout>
  );
}

export default App;
