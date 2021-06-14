const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        "hello-world" :"./src/hello-world.js",
        "image": "./src/image.js"
    },
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'/static/'
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
            filename:'hello-world-page.html',
            chunks:['hello-world'],
            title:'hello-world',
            template:'src/page-template.hbs',
            meta:{
                description:"hello world description"
            },
            minify: false
        }),
        new HtmlWebpackPlugin({
            filename:'image-page.html',
            chunks:['image'],
            title:'image',
            template:'src/page-template.hbs',
            meta:{
                description:"image page description"
            },
            minify: false
        })
    ] 
}