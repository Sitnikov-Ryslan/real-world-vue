module.exports = {
  plugins: {
    autoprefixer: {}
  },
  module: {
    rules: {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  }
}