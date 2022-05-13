import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

const GhostButton = () => <div>54321</div>

export default {
    title: 'Atoms/Buttons/GhostButton',
    component: GhostButton,
    parameters: {},
    args: {},
    argTypes: {},
} as ComponentMeta<typeof GhostButton>;

const Template: ComponentStory<typeof GhostButton> = (args: {}) => <GhostButton {...args} />;

export const Default = Template.bind({});
