import Image from "next/image"
import Link from "next/link"
import { formatter } from '../utils/helpers'

export const ProductCard = ({ product }) => {
  console.log("🚀 ~ file: ProductCard.js ~ line 5 ~ ProductCard ~ product", product)
  const { handle, title } = product.node
  const { altText, originalSrc } = product.node.images.edges[0].node
  const price = formatter.format(product.node.priceRange.minVariantPrice.amount)

  return (
    <Link href={`/products/${handle}`}>
      <a className="group">
        <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image src={originalSrc} alt={altText} layout="fill" objectFit="cover" />
          </div>
        </div>

        <h3 className="mt-4 text-lg font-medium text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-700">{price}</p>

      </a>
    </Link>
  )
}
