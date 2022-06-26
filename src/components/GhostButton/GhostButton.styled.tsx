import styled from 'styled-components';

/* @Types */
import { TGhostButtonProps, TSizeMap } from './GhostButton.types';

/* @Components */
import { BaseButton } from '../BaseButton';

/* @Helpers */
import { hexToRgb } from 'helpers/hexToRgba';

export const GHOST_BUTTON_SIZE_MAP: TSizeMap = {
  sm: {
    minWidth: '32px',
    minHeight: '32px',
    padding: '5px 12px',
    borderRadius: '4px',
  },
};

export const RenderLeadingStyled = styled.span<TGhostButtonProps & { hasMargin: boolean }>(({ hasMargin }) => ({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  ...(hasMargin && { marginRight: '8px' }),
}));

export const RenderTrailingStyled = styled.span<TGhostButtonProps>({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '8px',
});

export const GhostButtonStyled = styled(BaseButton)<TGhostButtonProps>(({ size, appearance, children }) => ({
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

  ...GHOST_BUTTON_SIZE_MAP[size],
  ...(!children && { padding: 0 }),

  '& svg': {
    fill: 'currentColor',
  },

  '&:hover:not(:focus):enabled': {
    color: 'var(--white)',
    backgroundColor: `var(--${appearance}-200)`,
  },

  '&:active': {
    color: 'var(--white)',
    backgroundColor: `var(--${appearance}-300)`,
  },

  '&:focus:not(:active):enabled': {
    color: 'var(--white)',
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
