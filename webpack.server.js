const path = require('path');

const nodeExternals = require('webpack-node-externals');

const { merge } = require('webpack-merge');

const baseConfig = require('./webpack.base');

const config = {
  target: 'node',

  mode: 'development',

  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },

  externals: [nodeExternals()],
};

module.exports = merge(baseConfig, config);
