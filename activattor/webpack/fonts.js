module.exports = function() {
  return {
    module: {
      rules: [{
          test: /\.(woff2?|svg)$/,
          loader: 'url-loader?limit=10000',
          options: {
            name: 'imig/[name].[ext]'
          },
        },
        {
          test: /\.(ttf|eot)$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]'
          },
        },
        // Bootstrap 3
        {
          test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
          use: 'imports-loader?jQuery=jquery'
        }
      ],
    },
  };
};
