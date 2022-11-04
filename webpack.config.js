const path = require("path");

module.exports = {
    entry: "./src/apps.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}