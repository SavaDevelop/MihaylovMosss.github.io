/* https://webpack.js.org/configuration/dev-server/ */
module.exports = function() {
    return {
        devServer: {
            stats: 'normal', //'errors-only',
            port: 9000,
            noInfo: false,
            overlay: {
              warnings: true,
              errors: true
            }
        }
    };
};
