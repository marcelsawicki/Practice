const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, 'ClientApp');
const BUILD_DIR = path.resolve(__dirname, 'public');

const config = {
    mode: 'development',
    entry: APP_DIR + '/Client.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
       static: {
           directory: path.join(__dirname, 'public'),
       },
       port: 9000 
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', 
                        'stage-2',
                        ['env', { targets: { browsers: ['last 2 versions'] }}]
                    ]
                }
            }
        ]

    }

};

module.exports = config;
