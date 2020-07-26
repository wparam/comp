const config = require('../webpack.config');

module.exports = {
  stories: ['../packages/**/*.story.js'],
  addons: [
    '@storybook/preset-create-react-app', 
    '@storybook/addon-actions', 
    '@storybook/addon-links'
  ],
  webpackFinal: (config) => console.dir(config, { depth: null }) || config,
};
