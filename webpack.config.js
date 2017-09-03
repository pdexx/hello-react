const path = require('path');
const webpack = require('webpack');

const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    context: srcPath,
    resolve: { 
        alias: {
            components: path.resolve(srcPath, 'components')// 要用的路徑名字: path.resolve(srcPath, '原先資料夾的名字')
        }//  in index.js import ... from 'components/Component.jsx'; ./ 變成 components/ 有助於不用計算相絕對路徑

    },
    entry: {
        index: './index.jsx',
        vendor: ['react', 'react-dom'] // 重覆模組打包
    },
    output: {
        path: distPath,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // jsx=js內寫了html,這兩檔都要轉
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    'es2015', {
                                        modules: false
                                    }
                                ],
                                'react'//react也要轉成ES5
                            ],
                            plugins: [
                                'babel-plugin-transform-class-properties'
                            ]
                        }
                    }
                ]
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [new webpack.optimize.CommonsChunkPlugin({name: 'vendor', filename: 'vendor.bundle.js', minChunks: 2})],
    devServer: {
        contentBase: distPath,
        compress: true,
        port: 7070
    }
};
