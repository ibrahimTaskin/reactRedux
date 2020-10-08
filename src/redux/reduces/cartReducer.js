import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
        var addedItem=state.find(c=>c.product.id===action.payLoad.product.id);
        if(addedItem){
            var newState=state.map(cartItem=>{
                if(cartItem.product.id===action.cartItem.product.id){
                    return Object.assign({},addedItem,{quatity:addedItem.quatity+1})
                }
                return cartItem;
            })
            return newState;           
        }
        else{
            //eğer eklenen eleman daha önce eklenmemişse
            //state tin kopyasını al, action la gelen paylodu ekle.
            return [...state,{...action.payLoad}]
        }

      return action.payLoad;

    case actionTypes.REMOVE_FROM_CART:
      return action.payLoad;

    default:
      return state;
  }
}
