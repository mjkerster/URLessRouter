module.exports = {
  entry: './src/URLessRouter.js',
  output: {
    path: __dirname + '/dist',
    filename: 'URLessRouter.js',
    libraryTarget: 'umd',
    library: 'URLessRouter'
  },
  devServer: {
    contentBase: __dirname + "/dist"
  }
}