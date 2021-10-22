/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const isProd = process.env.MODE_ENV === 'production'

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  },
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com']
  }
})

// /** @type {import('next').NextConfig} */
// module.exports = {
//   reactStrictMode: true,
// }
