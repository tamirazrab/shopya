import ProductPageContent from "../../components/ProductPageContent"
import { getAllProducts, getProduct } from "../../lib/shopify"

export default function ProductPage({ product }) {
  return (
    <div class="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  )
}


export async function getStaticPaths() {
  const products = await getAllProducts()

  const paths = products.map(product => {
    const handle = String(product.node.handle)

    return {
      params: { product: handle }
    }
  })

  return {
    paths, fallback: false
  }
}


export async function getStaticProps({ params }) {
  const product = await getProduct(params.product)

  return {
    props: { product },
  }
}
