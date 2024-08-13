const { merge } = require("webpack-merge")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const { resolve } = require("path")
const commonCfg = require("./webpack.common")
const fs = require("fs")
const path = require("path")
// const packageJson = require("../package.json")
// const version = JSON.parse(packageJson).version
const packageJson = fs.readFileSync(
  path.resolve(__dirname, "../package.json"),
  "utf-8"
)
const version = JSON.parse(packageJson).version
module.exports = merge(commonCfg, {
  mode: "production",
  entry: {
    ["plugin"]: "./src/index.tsx",
    ["index"]: "./src/help/callConnectorHttp.ts",
  },
  output: {
    globalObject: "this",
    // filename: `[name].${version}.js`,
    filename:"[name].js",
    path: resolve(process.cwd(), "runtime"),
    libraryTarget: "umd",
    library: "@mybricks/nocobase-service-interface",
  },
  externals: [
    {
      react: "react",
      "react-dom": "react-dom",
    },
  ],
  plugins: [
    // new BundleAnalyzerPlugin({
    //   analyzerMode: "static",
    // }),
  ],
})
