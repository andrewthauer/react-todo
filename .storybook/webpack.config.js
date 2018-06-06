const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const {
  TsConfigPathsPlugin
} = require('awesome-typescript-loader');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader"),
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push('.ts', '.tsx');
  config.resolve.plugins = config.resolve.plugins || [];
  config.resolve.plugins.push(
    new TsConfigPathsPlugin({
      configFile: path.resolve(__dirname, '../tsconfig.json'),
    })
  );
  return config;
};
