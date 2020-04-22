module.exports = [
  {
    test: /\.(png|jpe?g|gif)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 10240, //10K
        }
      }
    ]
  }
]