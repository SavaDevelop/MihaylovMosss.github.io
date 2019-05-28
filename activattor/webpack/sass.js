module.exports = function(paths) {
    return {
        module: {
            rules: [{
                    test: /\.scss$/,
                    include: paths,
                    use: [{
                            loader: 'style-loader', options: {
                              sourceMap: true
                            }
                          },
                          {
                            loader: 'css-loader', options: {
                              sourceMap: true
                            }
                          },
                          {
                            loader: 'sass-loader', options: {
                              sourceMap: true
                            }
                          }]
                    },
                    {
                    test:  /\.sass$/,
                    include: paths,
                    use:[{
                          loader: 'style-loader', options: {
                            sourceMap: true
                          }
                        },
                        {
                          loader: 'css-loader', options: {
                            sourceMap: true
                          }
                        },
                        {
                          loader: 'sass-loader', options: {
                            sourceMap: true
                          }
                        }]
                    }]
        }
    };
};
