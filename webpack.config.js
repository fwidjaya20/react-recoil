const dotenv = require("dotenv").config();
const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const PUBLIC_PATH = process.env.PUBLIC_PATH;
const NODE_ENV = process.env.NODE_ENV;

module.exports = {
    name: "web",
    entry: "./app/web/src/index.tsx",
    output: {
        path: path.join(__dirname, "/dist/web"),
        filename: NODE_ENV === "production" 
            ? "[name].[contenthash].bundle.min.js"
            : "[name].[hash].bundle.min.js",
        chunkFilename: NODE_ENV === "production"
            ? "[name].[contenthash].bundle.min.js"
            : "[name].[hash].bundle.min.js",
        publicPath: PUBLIC_PATH
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
        alias: {
            "@web": path.resolve(__dirname, "apps", "web", "src"),
            "@cores": path.resolve(__dirname, "src", "cores"),
            "@domains": path.resolve(__dirname, "src", "domains"),
            "@shared": path.resolve(__dirname, "src", "shared"),
        }
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: [/node_modules/],
                use: ['ts-loader'],
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.parsed)
        }),
        new CleanWebpackPlugin.CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public", "index.html"),
            minify: true
        })
    ],
    devServer: {
        hot: false,
        publicPath: PUBLIC_PATH
    }
};