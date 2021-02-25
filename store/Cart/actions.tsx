import { 
  Product, 
  ADD_PRODUCT, 
  REMOVE_PRODUCT, 
  CartActionTypes,
  OPEN_CART,
} from './types'

export function addProduct(product: Product): CartActionTypes {
  return {
    type:  ADD_PRODUCT,
    product: product
  }
}

export function deleteProduct(id: number): CartActionTypes {
  return {
    type:   REMOVE_PRODUCT,
    id
  }
}

export function openCart(id: number): CartActionTypes {
  return {
    type:   OPEN_CART,
    id
  }
}