import React from "react";
import { Row, Col } from "reactstrap";
import CategoryList from "../categories/CategoryList";
import ProductList from "../products/ProductList";

function Dashboard() {
  return (
    <div>
      <Row>
        <Col xs="4">
          <CategoryList />
        </Col>
        <Col xs="8">
          <ProductList />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
