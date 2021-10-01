const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const webpack = require("webpack");

module.exports = merge(common, {
    mode: "development",
    cache: true,
    watch: true,
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
        }),
    ],
});