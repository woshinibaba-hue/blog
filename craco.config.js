const path = require('path')

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components')
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://122.112.240.26:8888/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/music': {
        target: 'https://netease-cloud-music-api-weld-ten.vercel.app/',
        changeOrigin: true,
        pathRewrite: {
          '^/music': ''
        }
      }
    }
  }
}
