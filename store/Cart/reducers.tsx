import {
  CartState,
  CartActionTypes,
  ADD_PRODUCT,
  REMOVE_PRODUCT
} from './types'

import produce from "immer"

const initialState: CartState = {
  products: [{
    id: 1,
    user: 'Mike',
    product: "First message from app",
    timestamp: new Date()
  }]
}

export function cartReducer(
  state = initialState,
  action: CartActionTypes
): CartState {
 return produce(state, draft => {
    switch (action.type) {

      case ADD_PRODUCT: 
          draft.products = [...draft.products, action.product]
        return;

      case REMOVE_PRODUCT:
        return;

      default:
        return draft
    }
})
}