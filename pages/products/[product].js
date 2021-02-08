import { useRouter } from 'next/router'

import Layout from "../../layout"

const Product = ({product, posts}) => {
  const router = useRouter()
  const { id } = router.query

  return <Layout>Product: {id}</Layout>
}

export default Product
