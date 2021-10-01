const webpack = require("webpack");
// const dotenv = require("dotenv").config();

// if (dotenv.error) {
//     throw "Please set up '.env' file first. Rename and modify '.env.example' to get started.";
// }

const core = {
    entry: "./src/scripts/theme.js",
    output: {
        filename: "theme.js",
    },
    externals: {
        jquery: "jQuery",
    },
    module: {
        rules: [{
            test: /\.scss$/i,
            use: [{
                    loader: "file-loader",
                    options: {
                        name: "[name].css",
                    },
                },
                {
                    loader: "extract-loader",
                },
                {
                    loader: "css-loader?-url",
                },
                {
                    loader: "postcss-loader",
                },
                {
                    loader: "sass-loader",
                },
            ],
        }, ],
    },
    plugins: [
        // new webpack.DefinePlugin({
        //     "process.env": dotenv.parsed,
        // }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
    ],
};

module.exports = core;