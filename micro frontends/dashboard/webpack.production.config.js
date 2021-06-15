const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    entry:"./src/dashboard.js",
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'http://localhost:9000/'
    },
    mode: 'production',
    optimization:{
        splitChunks:{
            chunks:'all'
        }
    },
    module :{
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset',
            },
            {
                test: /\.(txt)$/i,
                type: 'asset/source',
            },
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(scss)$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env'],                                        
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(hbs)$/,
                use: ['handlebars-loader']
            },
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                "**/*",
                path.join(process.cwd(), "build/**/")

            ]
        }),
        new HtmlWebpackPlugin({
            filename:'dashboard.html',
            title:'dashboard'
        }),
        new ModuleFederationPlugin({
            name:"app",
            remotes:{
                HelloWorldApp: 'HelloWorldApp@http://localhost:9001/remoteEntry.js',
                imageApp: 'imageApp@http://localhost:9002/remoteEntry.js'
            }
        })
    ] 
}