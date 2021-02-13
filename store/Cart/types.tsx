export interface Product {
    id: number
    user: string
    product: string
    timestamp: Date
  }
  
  export interface CartState {
    products: Product[]
  }

export const ADD_PRODUCT = 'ADD_PRODUCTE'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

interface AddToCart {
  type: typeof ADD_PRODUCT
  product: Product
}

interface RemoveFromCart {
  type: typeof REMOVE_PRODUCT
  meta: {
    timestamp: number
  }
}



export type CartActionTypes = AddToCart | RemoveFromCart