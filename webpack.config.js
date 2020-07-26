const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [
          "@babel/env",
          "@babel/typescript",
          "@babel/react"
        ],
        plugins: [
          "@babel/plugin-proposal-export-default-from",
          "@babel/plugin-proposal-class-properties"
        ],
      },
    });

    config.resolve.extensions.push('.ts', '.tsx');

    // Return the altered config
    return config;
  }
};