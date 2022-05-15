import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

/* @Components */
import { BaseButton } from './BaseButton';

export default {
  title: 'Atoms/Button/BaseButton',
  component: BaseButton,
  parameters: {},
  args: {
    children: 'Button',
  },
  // argTypes: {},
} as ComponentMeta<typeof BaseButton>;

export const Default: Story = (args) => <BaseButton {...args}>{args.children}</BaseButton>;
