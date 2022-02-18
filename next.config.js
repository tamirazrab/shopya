/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    SHOPIFY_STORE_FRONT_ACCESS_TOKEN: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
    SHOPIFY_STORE_DOMAIN: process.env.SHOPIFY_STORE_DOMAIN
  },
  images: {
    domains: ['cdn.shopify.com']
  }
}
