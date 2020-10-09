import React, { Component } from "react";
import { connect } from "react-redux";
import { Badge, Button, Table } from "reactstrap";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartAction from "../../redux/actions/cartAcitons";
import alertify from 'alertifyjs'

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart=(product)=>{
    this.props.actions.addToCart({product,quatity:1})
    alertify.warning(product.productName+" Sepete Eklendi.",2)
  }

  render() {
    return (
      <div>
        <h3>
          <Badge color="warning">Products</Badge>
          <Badge color="success">
            {this.props.currentCategory.categoryName}
          </Badge>
        </h3>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>quantityPerUnit</th>
              <th>unitPrice</th>
              <th>unitsInStock</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button color="success" onClick={()=>this.addToCart(product)}>Ekle</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart:bindActionCreators(cartAction.addToCart,dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
