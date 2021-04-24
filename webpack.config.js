const path = require("path");

module.exports = {
    entry: "./src/script.js",
    output: {
        path: path.resolve(__dirname, "public/js"),
        filename: "script.js"
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: { presets: ['@babel/preset-env'] }
            }
        }]
    }
}