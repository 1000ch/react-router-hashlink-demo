const path = require('path');

module.exports = {
  entry: {
    'lib': [
      'react',
      'react-dom',
      'prop-types',
      'react-router-dom',
      'react-router-hashlink'
    ],
    'app': './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react']
        }
      }
    }]
  }
};
