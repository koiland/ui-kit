import styled from 'styled-components';

/* @Types */
import { TTertiaryButtonProps, TSizeMap } from './TertiaryButton.types';

/* @Components */
import { BaseButton } from '../BaseButton';

export const TERTIARY_BUTTON_SIZE_MAP: TSizeMap = {
  sm: {
    minWidth: '32px',
    minHeight: '32px',
    padding: '5px 12px',
    borderRadius: '4px',
  },
};

export const RenderLeadingStyled = styled.span<TTertiaryButtonProps & { hasMargin: boolean }>(({ hasMargin }) => ({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  ...(hasMargin && { marginRight: '8px' }),
}));

export const RenderTrailingStyled = styled.span<TTertiaryButtonProps>({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '8px',
});

export const TertiaryButtonStyled = styled(BaseButton)<TTertiaryButtonProps>(({ size, appearance, children }) => ({
  color: `var(--${appearance}-100)`,
  border: '1px solid transparent',
  fontSize: '14px',
  fontFamily: 'inherit',
  lineHeight: 'var(--line-height-20)',
  fontWeight: 'var(--font-weight-semi-bold)',
  backgroundColor: 'transparent',
  transition: `color var(--transition-default),
               border-color var(--transition-default),
               background-color var(--transition-default)`,

  ...TERTIARY_BUTTON_SIZE_MAP[size],
  ...(!children && { padding: 0 }),

  '& svg': {
    fill: 'currentColor',
  },

  '&:hover:not(:focus):enabled': {
    color: `var(--${appearance}-200)`,
  },

  '&:active': {
    color: `var(--${appearance}-300)`,
  },

  '&:focus:not(:active):enabled': {
    color: `var(--${appearance}-100)`,
  },

  '&:disabled': {
    color: 'var(--white)',
    backgroundColor: 'var(--gray-100)',

    '& svg': {
      color: 'var(--white)',
    },
  },
}));
