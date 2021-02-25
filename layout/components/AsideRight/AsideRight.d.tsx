export interface Product {
    id: number
    name: string
    img: string
    desc: string
  }
export interface AsideRightProps {
    isFixed: boolean
   isDisplay: boolean
   data?: [Product]
   deleteProduct: (id: number) => void
   closeCart: (arg: boolean) => void
}