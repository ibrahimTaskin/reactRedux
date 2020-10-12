import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import CartDetail from "../cart/CartDetail";
import Navi from "../navi/Navi";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/product" component={Dashboard} />
          <Route exact path="/cart" component={CartDetail} />
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
        </Switch>
       
      </Container>
    </div>
  );
}

export default App;
