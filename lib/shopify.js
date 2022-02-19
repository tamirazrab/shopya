const domain = process.env.SHOPIFY_STORE_DOMAIN
const storeFrontAccessToken = process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN

export const shopifyData = async (query) => {
  const URL = `https://${domain}/api/2022-01/graphql.json`
  const options = {
    endpoint: URL, method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storeFrontAccessToken,
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query })
  }

  try {
    const data = await fetch(URL, options)
    return data.json()
  } catch (error) {
    throw new Error("Products not fetched.")
  }
}

export const getProductsInCollection = async () => {
  const query = `
  {
  collectionByHandle(handle: "frontpage") {
    title
    products(first: 25) {
      edges {
        node {
          id
          title
          handle
          priceRange {
           minVariantPrice{
             amount
            }
          }
          images(first: 5) {
            edges {
              node {
                originalSrc
                altText
              }
            }
          }
        }
      }
    }
  }
}

  `

  const response = await shopifyData(query)
  console.log("🚀 ~ file: shopify.js ~ line 50 ~ getProductsInCollection ~ response", response)
  const products = response.data.collectionByHandle.products.edges

  return products ? products : []
}

export const getAllProducts = async () => {
  const query = `
      {
        products(first: 25) {
          edges {
            node {
              handle
              id
            }
          }
        }
      }

  `

  const response = await shopifyData(query)
  const productSlugs = response.data.products.edges

  return productSlugs ? productSlugs : []
}


export const getProduct = async (handle) => {
  const query = `
      {
        productByHandle(handle: "${handle}") {
          id
          title
          handle
          description
          images(first: 5) {
            edges {
              node {
                altText
                originalSrc
              }
            }
          }
          options {
            id
            name
            values
          }
          variants(first: 25) {
            edges {
              node {
                selectedOptions {
                  name
                  value
                }
                image {
                  altText
                  originalSrc
                }
                title
                id
                priceV2 {
                  amount
                }
              }
            }
          }
        }
      }
  `

  const response = await shopifyData(query)
  const product = response.data.productByHandle

  return product ? product : []
}
