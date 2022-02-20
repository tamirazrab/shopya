import Image from "next/image"
import ProductForm from "./ProductForm"

export default function ProductPageContent({ product }) {
  const image = product.images.edges[0].node.originalSrc
  const alt = product.images.edges[0].node.altText
  return (
    <div class="flex flex-col justify-center items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-4 lg:space-x-8 max-w-6xl w-11/12 mx-auto">
      <div class="w-full max-w-md border bg-white rounded-2xl overflow-hidden shadow-lg md:w-1/2">
        <div class="relative h-96 w-full">
          <Image src={image} alt={alt} layout="fill" objectFit="cover" />
        </div>
      </div>

      <ProductForm product={product} />
    </div>
  )
}
