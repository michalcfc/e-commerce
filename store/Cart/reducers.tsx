import {
  CartState,
  CartActionTypes,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  OPEN_CART,
  LAST_ADDED_ITEM,
} from './types'

import produce from "immer"

const initialState: CartState = {
  products: [],
  openCart: false,
  lastAddedItem: ''
}

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
 return produce(state, draft => {
    switch (action.type) {

      case ADD_PRODUCT: 
          draft.products = [...draft.products, action.product]
          draft.lastAddedItem = action.product.name
        return;

      case REMOVE_PRODUCT:
        draft.products = draft.products.filter(item => item.id !== action.id)
        return;

      case OPEN_CART:
        draft.openCart = !draft.openCart
        return;

      default:
        return draft
    }
})
}