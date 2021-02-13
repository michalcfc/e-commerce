import { 
  Product, 
  ADD_PRODUCT, 
  REMOVE_PRODUCT, 
  CartActionTypes,
} from './types'

// TypeScript infers that this function is returning SendMessageAction
export function sendMessage(newMessage: Product): CartActionTypes {
  return {
    type:  ADD_PRODUCT,
    product: newMessage
  }
}

// TypeScript infers that this function is returning DeleteMessageAction
export function deleteMessage(timestamp: number): CartActionTypes {
  return {
    type:   REMOVE_PRODUCT,
    meta: {
      timestamp
    }
  }
}