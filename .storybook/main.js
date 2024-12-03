/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const path = require('path');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: [path.resolve(__dirname, '../public')], // 절대 경로로 지정
  // staticDirs: ["..\\public"],
};
export default config;
