import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';

/* @Components */
import { Monogram } from 'components/Monogram';

export default {
  title: 'Monogram',
  component: Monogram,
  parameters: {
    docs: {
      description: {
        component: 'Monogram component',
      },
    },
  },
  argTypes: {
    size: {
      control: 'select',
      defaultValue: 'sm',
    },
    appearance: {
      control: 'select',
      defaultValue: 'blue',
    },
  },
} as ComponentMeta<typeof Monogram>;

export const Default: Story = ({ ...args }): JSX.Element => <Monogram initials="super admin" {...args} />;
