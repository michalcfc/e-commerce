export interface Product {
    id: number
    name: string
    img: string
    desc: string
  }
  
  export interface CartState {
    products: Product[]
    openCart: boolean
    lastAddedItem: string
  }

export const ADD_PRODUCT = 'ADD_PRODUCTE'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const OPEN_CART = 'OPEN_CART'
export const LAST_ADDED_ITEM = 'LAST_ADDED_ITEM'

interface AddToCart {
  type: typeof ADD_PRODUCT
  product: Product
}

interface RemoveFromCart {
  type: typeof REMOVE_PRODUCT
  id: number
}

interface OpenCart {
  type: typeof OPEN_CART
  id: number
}

interface LastAddedItem {
  type: typeof LAST_ADDED_ITEM
  name: string
}



export type CartActionTypes = AddToCart | RemoveFromCart | OpenCart | LastAddedItem