const path = require('path')
// gzip
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const { whenProd, getPlugin, pluginByName } = require('@craco/craco')

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components')
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path][base].gz', // 目标资源名称。[file] 会被替换成原资源。[path] 会被替换成原资源路径，[base] base64 编码，避免命名冲突
        algorithm: 'gzip', // 算法
        test: new RegExp('\\.(js|css)$'), // 压缩 js 与 css
        threshold: 10240, // 只处理比这个值大的资源。按字节计算
        minRatio: 0.8 // 只有压缩率比这个值小的资源才会被处理
      })
    ],
    configure: (webpackConfig) => {
      let cdn = {
        js: [],
        css: []
      }
      // 对webpack进行配置
      whenProd(() => {
        // 只会在生产环境执行
        webpackConfig.externals = {
          react: 'React',
          'react-dom': 'ReactDOM',
          redux: 'Redux',
          antd: 'antd'
        }

        cdn = {
          js: [
            'https://unpkg.com/react@18.2.0/umd/react.production.min.js',
            'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js',
            'https://unpkg.com/redux@4.2.0/dist/redux.min.js',
            'https://unpkg.com/antd@4.22.4/dist/antd.min.js'
          ],
          css: ['https://unpkg.com/antd@4.22.4/dist/antd.min.css']
        }
      })

      const { isFound, match } = getPlugin(
        webpackConfig,
        pluginByName('HtmlWebpackPlugin')
      )
      if (isFound && match.userOptions) {
        // 找到了html的插件
        match.userOptions.cdn = cdn
      }

      return webpackConfig
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
