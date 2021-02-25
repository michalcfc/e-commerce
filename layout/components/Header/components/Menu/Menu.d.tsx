interface Links {
    name: string,
  }

export interface MenuProps {
    links: Links[]
    isCartOpen: boolean
    openCart: (arg: boolean) => void
    data?: string[]

}