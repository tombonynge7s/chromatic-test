const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules = [{
    test: /\.(js|jsx)$/,
    use: {
      loader: 'babel-loader'
    },
    include: [
      path.resolve(__dirname, '.'),
      path.resolve(__dirname, '../src'),
    ]
  }, {
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: true,
          context: path.resolve(__dirname, '../'),
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
      'sass-loader',
      'postcss-loader',
    ],
    include: path.resolve(__dirname, '../'),
  }, {
    test: /\.svg$/,
    use: [{
      loader: '@svgr/webpack',
      options: { svgo: false }
    }],
    include: path.resolve(__dirname, '../src'),
  }];

  return config;
};