import { useRouter } from 'next/router'

const Product = () => {
  const router = useRouter()
  const { product } = router.query

  return <>Product: {product}</>
}

export default Product
