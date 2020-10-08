import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payLoad: category,
  };
}

export function getCategoriesSuccess(category) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payLoad: category,
  };
}


export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";
    return fetch(url)
      .then((response) => response.json())
      .then((data) => dispatch(getCategoriesSuccess(data)));
  };
}
