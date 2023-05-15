const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.plugins.push(
    new MonacoWebpackPlugin({
      languages: ["markdown"],
    })
  );
  return config;
};
