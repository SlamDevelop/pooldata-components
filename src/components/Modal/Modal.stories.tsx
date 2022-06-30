import React from 'react';
import { ComponentMeta } from '@storybook/react';

import * as Modal from './Modal';
import Button from '../Button';

export default {
  title: 'Example/Modal',
  component: Modal.Root,
  subcomponents: { Button },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    button: { name: 'buttonText' },
  },
} as ComponentMeta<typeof Modal.Root>;


export interface CustomProps {
  button: string;
}

export const Custom = ({ button }: CustomProps) => (
  <Modal.Root>
    <Modal.Trigger asChild>
      <Button>{button}</Button>
    </Modal.Trigger>
    <Modal.Content>
      <div>
        <h3>Custom content</h3>
      </div>
    </Modal.Content>
  </Modal.Root>
);
Custom.args = {
  button: 'Modal',
};