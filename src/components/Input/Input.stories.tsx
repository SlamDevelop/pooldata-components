import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  args: {
    type: 'text'
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Primary input',
  color: 'blue'
};
Primary.argTypes = {
  id: { table: { disable: true } },
};
