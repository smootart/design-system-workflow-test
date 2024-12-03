import { fn } from '@storybook/test';

import { BorderRadius } from './BorderRadius';

export default {
  title: 'Example/BorderRadius',
  component: BorderRadius,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    // onLogin: fn(),
    // onLogout: fn(),
    // onCreateAccount: fn(),
  },
};

// export const LoggedIn = {
//   args: {
//     // user: {
//     //   name: 'Jane Doe',
//     //   describe: 'Logged in',
//     //   Description: 'User is logged in',
//     // },
//   },
// };

export const BorderRadiusList = {};
