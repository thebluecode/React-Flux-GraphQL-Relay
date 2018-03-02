module.exports = {
    entry: './js/app.js',
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react', 'stage-2'],
                    plugins: [__dirname + '/babelRelayPlugin']
                }
            }
        ]
    }
}