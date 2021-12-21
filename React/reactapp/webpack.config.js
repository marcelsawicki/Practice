const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname, '');
const BUILD_DIR = path.resolve(__dirname, 'public');
const BUILD_DIR_BUILD = path.resolve(__dirname, 'public');

const config = {
    entry: APP_DIR + '/HelloWorld.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    devServer: {
       static: {
           directory: path.join(__dirname, 'public'),
       },
       port: 9000 
    }
};

module.exports = config;
