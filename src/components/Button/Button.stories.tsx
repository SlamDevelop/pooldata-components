import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  args: {
    type: 'button'
  },
  argTypes: {
    color: {
      options: ['blue', 'yellow'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary button',
  color: 'blue'
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary button',
  color: 'yellow'
};
