export interface HomeProps {
    products: ''
    addProduct: (arg: { id: number, name: string, img: string, desc: string}) => void
    deleteProduct: (id: number) => void
}