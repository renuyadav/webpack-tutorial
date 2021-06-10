const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:"./src/index.js",
    output:{
        filename: 'index.[contenthash].js',
        path: path.resolve(__dirname, './dist'),
        publicPath:'/static/'
    },
    mode: 'production',
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
            filename:'index.[contenthash].css'
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                "**/*",
                path.join(process.cwd(), "build/**/")

            ]
        }),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'src/page-template.hbs',
            title:"Single Page application",
            meta:{
                description:"single page description"
            }
        })
       
    ] 
}