import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

/* @Components */
import { Spinner } from 'components/Spinner';
import { PrimaryButton } from 'components/PrimaryButton';

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

export const Loading: Story = ({ children, ...args }) => (
  <PrimaryButton {...args} loading renderLeading={<Spinner />}>
    {children}
  </PrimaryButton>
);
