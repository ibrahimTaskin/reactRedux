import * as actionTypes from "./actionTypes";

export function getProductSuccess(category) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payLoad: category,
  };
}

export function createProductSuccess(product) {
  return {
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
    payLoad: product,
  };
}

export function updateProductSuccess(product) {
  return {
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payLoad: product,
  };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "Post",
    headers: { "content-type": "application/json" }, //default ta olan kullanım fakat apiye göre farklılık gösterebilir.
    body: JSON.stringify(product),
  })
    .then(handleResponse) //response sonucuna göre karar verecek operasyon
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(saveProduct)) //eğer id si varsa update i çalıştır.
          : dispatch(createProductSuccess(saveProduct)); //id yoksa save i çalıştır.
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }
  //Response ta hata varsa çalışır.
  const error = await response.text();
  throw new Error(error);
}

export function handleError(error) {
  console.error("Bir hata oluştu.");
  throw error;
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
