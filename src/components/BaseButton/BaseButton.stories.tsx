import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const BaseButton = () => <div>12345</div>;

export default {
  title: 'Atoms/Button/BaseButton',
  component: BaseButton,
  parameters: {},
  args: {},
  argTypes: {},
} as ComponentMeta<typeof BaseButton>;

const Template: ComponentStory<typeof BaseButton> = (args: {}) => <BaseButton {...args} />;

export const Default = Template.bind({});
