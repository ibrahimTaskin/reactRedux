import * as actionTypes from "./actionTypes";

export function getProductSuccess(category) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payLoad: category,
  };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(getProductSuccess(data)));
  };
}
