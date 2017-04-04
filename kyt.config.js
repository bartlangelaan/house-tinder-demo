
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  reactHotLoader: true,
  debug: false,
  hasServer: false,
  modifyWebpackConfig: (config, options) => {

    config.output.publicPath = '';

    config.plugins.push(
      new webpack.LoaderOptionsPlugin({
        options: {
          postcss: [require('postcss-cssnext')({
            features: {
              customProperties: {
                variables: {
                  'color-primary': '#93C01F'
                },
              },
            },
          })],
          context: '/',
        },
      })
    );
    config.plugins.push(new HtmlWebpackPlugin({
      template: 'src/index.ejs',
    }));

    return config;
  },
};
