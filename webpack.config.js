let path = require("path");
let webpack = require("webpack");

module.exports = function(env) {

    const pack = require("./package.json");
    const CopyPlugin = require('copy-webpack-plugin');
    const TerserPlugin = require('terser-webpack-plugin');
    
    const production = !!(env && env.production === "true");
    const testing = !!(env && env.testing !== undefined);

    let config = {
        mode: (production) ? "production" : "development",
        entry: (function() {
            if (testing) {
                return "./tests/suite.ts";
            } else {
                return "./sources/app.ts";
            }
        }),
        output: {
            path: (testing) ? path.join(__dirname, "testbase") : path.join(__dirname, "codebase"),
            publicPath: (testing) ? "testbase/" : "codebase/",
            filename: "app.js",
            chunkFilename: "[name].js"
        },
        devServer: {
            //compress: true,
            disableHostCheck: true,
            host: '0.0.0.0',
            port: 8081,
            /*writeToDisk: (filePath) => {
                return /\.css$/.test(filePath);
            }*/
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loader: "ts-loader"
                },
                {
                    test: /\.(svg|png|jpg|gif)$/,
                    loader: "url-loader?limit=25000"
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".js"],
            modules: ["./sources", "node_modules"],
            alias: {
                "jet-locales": path.resolve(__dirname, "sources/locales"),
                "jet-views": path.resolve(__dirname, "sources/views"),
                "@root": path.resolve(__dirname, "sources")
            }
        },
        plugins: [
            new CopyPlugin([
                { from: "./sources/styles/app.css", to: "styles/app.css" }
            ]),
            new webpack.DefinePlugin({
                VERSION: `"${pack.version}"`,
                APPNAME: `"${pack.name}"`,
                PRODUCTION: production
            })
        ]
    };

    if (production) {
        config.optimization = {
            minimizer: [new TerserPlugin()]
        }
    };

    return config;
};
