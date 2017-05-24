/**
 * Created by Administrator on 2017/5/24.
 */
var path = require('path');
module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname,'build'),
        filename: 'app.bundle.js',
        publicPath: '/build/',
    },
    module: {
        loaders: [{
            test: /\.js$/,
            include: path.join(__dirname,'src'),
            loader: 'babel-loader',
            query: {
                presets: [ 'es2015', 'react' ]
            }
        }]
    }
};