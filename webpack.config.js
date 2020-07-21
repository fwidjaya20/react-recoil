const path = require("path");

module.exports = {
    name: "web",
    entry: "./app/web/src/index.ts",
    output: {
        path: path.join(__dirname, "/dist/web"),
        filename: "bundle.min.js"
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
    }
};