const path = require('path');

module.exports = {
  entry: './assets/javascripts/index.js',
  output: {
    path: path.resolve(__dirname, '_site/assets/javascripts'),
    filename: 'bundle.js',
  },
  module: {
  },
};
