var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './scripts/main',
    debug: true,
    devtool: 'source-map',
    devServer: {
        outputPath: 'dist'
    },
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([{from: 'static'}])
    ],
    module: {
        loaders: [
            {
                loader: 'babel',
                test: /\.jsx?$/,
                query: {
                    presets: ['es2015', 'react']
                },
                exclude: /node_modules/
            },
            {
                loader: 'file-loader',
                test: /\.(html)$/,
            },
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '']
    }
}
