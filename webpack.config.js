const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  module: {
    rules: [
      { test: /\.ts$/, include: __dirname + '/src', loader: "tslint-loader", enforce: 'pre' },
      { test: /\.ts$/, include: __dirname + '/src', loader: "ts-loader" }
    ]
  },
  devtool: 'source-map',
  devServer: {
    overlay: true
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html', inject: false })
  ],
}
