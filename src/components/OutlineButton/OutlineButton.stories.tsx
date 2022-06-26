import React from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { Filters } from '@koiland/icons';

/* @Components */
import { Icon } from 'components/Icon';
import { Spinner } from 'components/Spinner';
import { OutlineButton, TOutlineButtonAppearance } from 'components/OutlineButton';

export default {
  title: 'Atoms/Buttons/OutlineButton',
  component: OutlineButton,
  parameters: {
    docs: {
      description: {
        component: 'Outline Button component',
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
} as ComponentMeta<typeof OutlineButton>;

export const Default: Story = ({ ...args }): JSX.Element => <OutlineButton {...args}>Outline Button</OutlineButton>;

export const WithIcon: Story = ({ ...args }): JSX.Element => (
  <OutlineButton {...args} renderLeading={<Icon glyph={Filters} size="sm" />}>
    Outline Button
  </OutlineButton>
);

export const WithIconOnly: Story = ({ ...args }): JSX.Element => (
  <OutlineButton {...args} renderLeading={<Icon glyph={Filters} size="sm" />} />
);

export const Appearances: Story = ({ children, ...args }): JSX.Element => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TOutlineButtonAppearance) => (
        <OutlineButton key={appearance} {...args} appearance={appearance} style={{ marginTop: '8px' }}>
          Outline Button
        </OutlineButton>
      ))}
    </div>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TOutlineButtonAppearance) => (
        <OutlineButton
          {...args}
          key={appearance}
          appearance={appearance}
          renderLeading={<Icon size="sm" glyph={Filters} />}
          style={{ marginTop: '8px' }}
        >
          Outline Button
        </OutlineButton>
      ))}
    </div>
    <div style={{ margin: '0 4px' }}>
      {['blue', 'green', 'red'].map((appearance: TOutlineButtonAppearance) => (
        <OutlineButton
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
  <OutlineButton {...args} disabled>
    Outline Button
  </OutlineButton>
);

export const Loading: Story = ({ children, ...args }): JSX.Element => (
  <OutlineButton {...args} loading renderLeading={<Spinner size="xs" />}>
    Outline Button
  </OutlineButton>
);
