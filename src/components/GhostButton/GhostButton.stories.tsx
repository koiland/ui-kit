import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Filters } from '@koiland/icons';

/* @Components */
import { Icon } from 'components/Icon';
import { Spinner } from 'components/Spinner';
import { GhostButton, TGhostButtonAppearance } from 'components/GhostButton';

export default {
  title: 'Atoms/Buttons/GhostButton',
  component: GhostButton,
  parameters: {
    docs: {
      description: {
        component: 'Ghost Button component',
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
} as ComponentMeta<typeof GhostButton>;

export const Default: Story = ({ ...args }): JSX.Element => <GhostButton {...args}>Ghost Button</GhostButton>;

export const WithIcon: Story = ({ ...args }): JSX.Element => (
  <GhostButton {...args} renderLeading={<Icon glyph={Filters} size="sm" />}>
    Ghost Button
  </GhostButton>
);

export const WithIconOnly: Story = ({ ...args }): JSX.Element => (
  <GhostButton {...args} renderLeading={<Icon glyph={Filters} size="sm" />} />
);

export const Appearances: Story = ({ ...args }): JSX.Element => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TGhostButtonAppearance) => (
        <GhostButton key={appearance} {...args} appearance={appearance} style={{ marginBottom: '8px' }}>
          Ghost Button
        </GhostButton>
      ))}
    </div>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TGhostButtonAppearance) => (
        <GhostButton
          {...args}
          key={appearance}
          appearance={appearance}
          renderLeading={<Icon size="sm" glyph={Filters} />}
          style={{ marginBottom: '8px' }}
        >
          Ghost Button
        </GhostButton>
      ))}
    </div>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TGhostButtonAppearance) => (
        <GhostButton
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
  <GhostButton {...args} disabled>
    Ghost Button
  </GhostButton>
);

export const Loading: Story = ({ children, ...args }): JSX.Element => (
  <GhostButton {...args} loading renderLeading={<Spinner size="xs" />}>
    Ghost Button
  </GhostButton>
);
