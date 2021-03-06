import styled from 'styled-components';

/* @Types */
import { TPrimaryButtonProps, TSizeMap } from './PrimaryButton.types';

/* @Components */
import { BaseButton } from '../BaseButton';

export const PRIMARY_BUTTON_SIZE_MAP: TSizeMap = {
  sm: {
    minWidth: '32px',
    minHeight: '32px',
    padding: '5px 12px',
    borderRadius: '4px',
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
  fontSize: '14px',
  fontFamily: 'inherit',
  lineHeight: 'var(--line-height-20)',
  fontWeight: 'var(--font-weight-semi-bold)',
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
    boxShadow: `0 0 0 3px rgb(var(--${appearance}-100), 0.3)`,
  },

  '&:disabled': {
    color: 'var(--white)',
    backgroundColor: 'var(--gray-100)',

    '& svg': {
      color: 'var(--white)',
    },
  },
}));
