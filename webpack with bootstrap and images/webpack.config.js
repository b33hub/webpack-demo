const path = require('path');
const webpack = require("webpack");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

let htmlOptions = {
    template: './src/app/index.html',
    minify: {
        collapseWhitespace: true,
        removeAttributeQuotes: true
    }
};

module.exports = {
    entry: './src/app/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(jpeg|jpg|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets/images',
                            sourcemap: true
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './src/app',
        hot: true,
        port: 4200 //port for development server
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/styles/[name].css',
            chunkFilename: './assets/styles/[id].css',
        }),
        new HtmlWebpackPlugin(htmlOptions)
    ]
};