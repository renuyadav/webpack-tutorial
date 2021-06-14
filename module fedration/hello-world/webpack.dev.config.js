const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

module.exports = {
    entry:"./src/hello-world.js",
    output:{
        filename: '[name].js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'http://localhost:9001/'
    },
    mode: 'development',
    devServer:{
        contentBase: path.resolve(__dirname, './dist'),
        index:path.resolve(__dirname, './hello-world-page.html'),
        port:9001,
        writeToDisk:true
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
            }
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename:'[name].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                "**/*",
                path.join(process.cwd(), "build/**/")

            ]
        }),
        new HtmlWebpackPlugin({
            filename:'hello-world-page.html',
            title:'hello-world',
            template:'src/page-template.hbs',
            meta:{
                description:"hello world description"
            },
            minify: false
        }),
        new ModuleFederationPlugin({
            name:"HelloWorldApp",
            filename:"remoteEntry.js",
            exposes:{
                './btn': './src/components/button/button.js'
            }
        })
    ]  
}