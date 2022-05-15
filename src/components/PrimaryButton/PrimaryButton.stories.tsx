import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

import { PrimaryButton } from './PrimaryButton';

export default {
  title: 'Atoms/Button/PrimaryButton',
  component: PrimaryButton,
  parameters: {},
  args: {
    children: 'Button',
  },
  // argTypes: {},
} as ComponentMeta<typeof PrimaryButton>;

export const Default: Story = ({ children, ...args }) => <PrimaryButton {...args}>{children}</PrimaryButton>;
