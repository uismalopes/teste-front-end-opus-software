const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV)
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: process.env.outputDir || 'dist',
    assetsDir: '',
    lintOnSave: false,
    runtimeCompiler: true,
    productionSourceMap: false,
    configureWebpack: config => {
        if (IS_PROD) {
            const plugins = []
            plugins.push(
                new UglifyJsPlugin({
                  uglifyOptions: {
                    compress: {
                    //   warnings: false,
                      drop_console: true,
                      drop_debugger: false,
                      pure_funcs: ['console.log']
                    }
                  },
                  sourceMap: false,
                  parallel: true
                })
            )
        config.plugins = [...config.plugins, ...plugins]
        }
    }
}