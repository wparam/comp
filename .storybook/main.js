const config = require('../webpack.config');

module.exports = {
  stories: ['../packages/**/*.story.[tj]sx'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: { configureJSX: true }
    }
  ],
  webpackFinal: async config => {

    config.module.rules.push({
      test: /\.(js|jsx)$/,
      loader: 'babel-loader'
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

    config.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
    return config;
  }
};
