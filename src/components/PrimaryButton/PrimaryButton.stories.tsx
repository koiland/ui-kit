import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Filters } from '@koiland/icons';

/* @Components */
import { Icon } from 'components/Icon';
import { Spinner } from 'components/Spinner';
import { PrimaryButton, TPrimaryButtonAppearance } from 'components/PrimaryButton';

export default {
  title: 'Atoms/Buttons/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    docs: {
      description: {
        component: 'Primary Button component',
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
    renderLeading: { control: 'null' },
    renderTrailing: { control: 'null' },
  },
} as ComponentMeta<typeof PrimaryButton>;

export const Default: Story = ({ ...args }): JSX.Element => <PrimaryButton {...args}>Primary Button</PrimaryButton>;

export const WithIcon: Story = ({ ...args }): JSX.Element => (
  <PrimaryButton {...args} renderLeading={<Icon glyph={Filters} size="sm" />}>
    Primary Button
  </PrimaryButton>
);

export const WithIconOnly: Story = ({ ...args }): JSX.Element => (
  <PrimaryButton {...args} renderLeading={<Icon glyph={Filters} size="sm" />} />
);

export const Appearances: Story = ({ children, ...args }): JSX.Element => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TPrimaryButtonAppearance) => (
        <PrimaryButton key={appearance} {...args} appearance={appearance} style={{ marginTop: '8px' }}>
          Primary Button
        </PrimaryButton>
      ))}
    </div>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TPrimaryButtonAppearance) => (
        <PrimaryButton
          {...args}
          key={appearance}
          appearance={appearance}
          renderLeading={<Icon size="sm" glyph={Filters} />}
          style={{ marginTop: '8px' }}
        >
          Primary Button
        </PrimaryButton>
      ))}
    </div>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TPrimaryButtonAppearance) => (
        <PrimaryButton
          {...args}
          key={appearance}
          appearance={appearance}
          renderLeading={<Icon size="sm" glyph={Filters} />}
          style={{ marginTop: '8px' }}
        />
      ))}
    </div>
  </div>
);

export const Disabled: Story = ({ children, ...args }): JSX.Element => (
  <PrimaryButton {...args} disabled>
    Primary Button
  </PrimaryButton>
);

export const Loading: Story = ({ children, ...args }): JSX.Element => (
  <PrimaryButton {...args} loading renderLeading={<Spinner size="xs" />}>
    Primary Button
  </PrimaryButton>
);
