const path = require('path')

const { whenProd, getPlugin, pluginByName } = require('@craco/craco')

const pathResolve = (pathUrl) => path.join(__dirname, pathUrl)

module.exports = {
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components')
    },
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
            'https://cdn.bootcss.com/redux/4.2.0/redux.min.js',
            'https://cdn.bootcdn.net/ajax/libs/antd/4.22.3/antd.min.js'
          ],
          css: ['https://cdn.bootcdn.net/ajax/libs/antd/4.22.3/antd.min.css']
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
