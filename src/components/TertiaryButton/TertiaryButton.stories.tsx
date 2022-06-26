import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Filters } from '@koiland/icons';

/* @Components */
import { Icon } from 'components/Icon';
import { Spinner } from 'components/Spinner';
import { TertiaryButton, TTertiaryButtonAppearance } from 'components/TertiaryButton';

export default {
  title: 'Atoms/Buttons/TertiaryButton',
  component: TertiaryButton,
  parameters: {
    docs: {
      description: {
        component: 'Tertiary Button component',
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
} as ComponentMeta<typeof TertiaryButton>;

export const Default: Story = ({ ...args }): JSX.Element => <TertiaryButton {...args}>Tertiary Button</TertiaryButton>;

export const WithIcon: Story = ({ ...args }): JSX.Element => (
  <TertiaryButton {...args} renderLeading={<Icon glyph={Filters} size="sm" />}>
    Tertiary Button
  </TertiaryButton>
);

export const WithIconOnly: Story = ({ ...args }): JSX.Element => (
  <TertiaryButton {...args} renderLeading={<Icon glyph={Filters} size="sm" />} />
);

export const Appearances: Story = ({ ...args }): JSX.Element => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TTertiaryButtonAppearance) => (
        <TertiaryButton key={appearance} {...args} appearance={appearance} style={{ marginBottom: '8px' }}>
          Tertiary Button
        </TertiaryButton>
      ))}
    </div>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TTertiaryButtonAppearance) => (
        <TertiaryButton
          {...args}
          key={appearance}
          appearance={appearance}
          renderLeading={<Icon size="sm" glyph={Filters} />}
          style={{ marginBottom: '8px' }}
        >
          Tertiary Button
        </TertiaryButton>
      ))}
    </div>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TTertiaryButtonAppearance) => (
        <TertiaryButton
          {...args}
          key={appearance}
          appearance={appearance}
          renderLeading={<Icon size="sm" glyph={Filters} />}
          style={{ marginBottom: '8px' }}
        />
      ))}
    </div>
  </div>
);

export const Disabled: Story = ({ children, ...args }): JSX.Element => (
  <TertiaryButton {...args} disabled>
    Tertiary Button
  </TertiaryButton>
);

export const Loading: Story = ({ children, ...args }): JSX.Element => (
  <TertiaryButton {...args} loading renderLeading={<Spinner size="xs" />}>
    Tertiary Button
  </TertiaryButton>
);
