import { fn } from '@storybook/test';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['!autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: {
      table: {
        disable: true, // Controls와 Docs 테이블에서 숨김
      },
    },
    buttonType: {
      table: {
        disable: true,
      },
    },
    showOutline: { table: { disable: true }},
    outline: { if: { arg: 'showOutline', truthy: true }},
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

const defaultArgs = {
  buttonType: 'primary',
  label: 'Label',
  size: 'medium',
  shape: 'round',
  isDisabled: false,
  isLoading: false,
  iconType: 'regular',
  iconLeft: false,
  iconRight: false,
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    ...defaultArgs,
    buttonType: 'primary',
    showOutline: true,
    outline: false,
  },
};

export const Secondary = {
  args: {
    ...defaultArgs,
    buttonType: 'secondary',
    showOutline: true,
    outline: false,
  },
};

export const SecondaryLow = {
  args: {
    ...defaultArgs,
  buttonType: 'secondary-low',
  },
};

export const Tertiary = {
  args: {
    ...defaultArgs,
    buttonType: 'tertiary',
  },
};
