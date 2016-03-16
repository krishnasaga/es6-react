module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './bin/bundle.js'
  },
  module: { loaders: [
    {
     test: /\.js?$/,
     loader: 'babel-loader',
     exclude: /node_modules/
   },
    {
      test: /\.scss$/,
      loaders: 'style!css!sass'
    }
  ]
  }
};
