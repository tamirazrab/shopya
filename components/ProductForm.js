import { formatter } from '../utils/helpers'
import ProductOptions from './ProductOption'
import { useState, useEffect } from 'react'


export default function ProductForm({ product }) {
  const price = formatter.format(product.variants.edges[0].node.priceV2.amount)
  const allVariantOptions = product.variants.edges?.map((variant) => {
    const options = {}

    variant = variant.node

    variant.selectedOptions.map((option) => {
      options[option.name] = option.value
    })

    return {
      id: variant.id,
      title: product.title,
      handle: product.handle,
      image: variant.image?.originalSrc,
      options,
      variantTitle: variant.title,
      variantPrice: variant.priceV2.amount,
      variantQuantity: 1,
    }
  })

  const defaultOptions = {}
  product.options.map((option) => {
    defaultOptions[option.name] = option.value
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultOptions)

  const setOptions = (name, value) => {
    setSelectedOptions(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  return (
    <div class="md:w1/3 flex w-full flex-col rounded-2xl p-4 shadow-lg">
      <h2 class="text-2xl font-bold">{product.title}</h2>
      <span class="pb-6">{price}</span>
      {product.options.map((option) => {
        const { name, values } = option

        return <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      })}
      <button className='bg-black rounded-lg text-white px-2 py-4 hover:bg-gray-300'>Add to Cart</button>
    </div>
  )
}
