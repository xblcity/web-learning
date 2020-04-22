module.exports = {
  splitChunks: {
    // runtimeChunk: {
    //   name: 'manifest'
    // },
    cacheGroups: {
      default: false,
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: 'commons',
        chunks: 'initial'
      },
      antd: {
        name: 'antd',
        test: /[\\/]node_modules[\\/](antd)[\\/]/,
        chunks: 'all',
        priority: 9
      }
    }
  },
}