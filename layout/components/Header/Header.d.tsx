interface Links {
  name: string,
}

export interface HeaderProps {
  links?: Links[]
  setView: (arg: String) => void
  toggleTheme: () => void
  openCart: (arg: boolean) => void
  data?: []
  isCartOpen: boolean
}