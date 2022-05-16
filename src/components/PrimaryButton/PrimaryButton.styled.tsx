import styled from 'styled-components';

/* @Types */
import { TPrimaryButtonProps, TSizeMap } from './PrimaryButton.types';

/* @Components */
import { BaseButton } from '../BaseButton';

/* @Helpers */
import { hexToRgb } from 'helpers/hexToRgba';

export const PRIMARY_BUTTON_SIZE_MAP: TSizeMap = {
  sm: {
    minWidth: '40px',
    minHeight: '40px',
    padding: '6px 12px',
    borderRadius: '4px',
    font: 'var(--font-16-bold)',
  },
  md: {
    minWidth: '48px',
    minHeight: '48px',
    padding: ' 6px 16px',
    borderRadius: '4px',
    font: 'var(--font-18-bold)',
  },
  lg: {
    minWidth: '64px',
    minHeight: '64px',
    padding: '6px 24px',
    borderRadius: '4px',
    font: 'var(--font-20-bold)',
  },
};

export const RenderLeadingStyled = styled.span<TPrimaryButtonProps & { hasMargin: boolean }>(({ hasMargin }) => ({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  ...(hasMargin && { marginRight: '8px' }),
}));

export const RenderTrailingStyled = styled.span<TPrimaryButtonProps>({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '8px',
});

export const PrimaryButtonStyled = styled(BaseButton)<TPrimaryButtonProps>(({ size, appearance, children }) => ({
  color: 'var(--white)',
  border: '1px solid transparent',
  backgroundColor: `var(--${appearance}-100)`,
  transition: `color var(--transition-default),
               border-color var(--transition-default),
               background-color var(--transition-default)`,

  ...PRIMARY_BUTTON_SIZE_MAP[size],
  ...(!children && { padding: 0 }),

  '& svg': {
    fill: 'currentColor',
  },

  '&:hover:not(:focus):enabled': {
    backgroundColor: `var(--${appearance}-200)`,
  },

  '&:active': {
    backgroundColor: `var(--${appearance}-300)`,
  },

  '&:focus:not(:active):enabled': {
    borderColor: `var(--${appearance}-300)`,
    backgroundColor: `var(--${appearance}-100)`,
    boxShadow: `0 0 0 3px rgba(${hexToRgb(`var(--${appearance}-100)`)}, 0.3)`,
  },

  '&:disabled': {
    color: 'var(--white)',
    backgroundColor: 'var(--gray-100)',

    '& svg': {
      color: 'var(--white)',
    },
  },
}));
