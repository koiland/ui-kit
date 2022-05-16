import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

/* @Components */
import { Spinner } from './Spinner';

/* @Types */
import { TSpinnerProps } from './Spinner.types';

export default {
  title: 'Atoms/Spinner',
  component: Spinner,
  parameters: {
    docs: {
      description: {
        component: 'Spinner component. Use it when you need to show loading status',
      },
    },
  },
} as ComponentMeta<typeof Spinner>;

export const Default: ComponentStory<typeof Spinner> = (args: TSpinnerProps) => <Spinner {...args} />;
