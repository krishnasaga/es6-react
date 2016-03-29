var precss       = require('precss'),
    autoprefixer = require('autoprefixer');
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
      loaders: ['style','css','postcss']
    }
  ]
  },
  postcss: function () {
        return [precss, autoprefixer];
  }
};
