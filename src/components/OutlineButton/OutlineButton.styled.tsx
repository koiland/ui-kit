import styled from 'styled-components';

/* @Types */
import { TOutlineButtonProps, TSizeMap } from './OutlineButton.types';

/* @Components */
import { BaseButton } from '../BaseButton';

/* @Helpers */
import { hexToRgb } from 'helpers/hexToRgba';

export const PRIMARY_BUTTON_SIZE_MAP: TSizeMap = {
  sm: {
    minWidth: '32px',
    minHeight: '32px',
    padding: '5px 12px',
    borderRadius: '4px',
  },
};

export const RenderLeadingStyled = styled.span<TOutlineButtonProps & { hasMargin: boolean }>(({ hasMargin }) => ({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  ...(hasMargin && { marginRight: '8px' }),
}));

export const RenderTrailingStyled = styled.span<TOutlineButtonProps>({
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: '8px',
});

export const OutlineButtonStyled = styled(BaseButton)<TOutlineButtonProps>(({ size, appearance, children }) => ({
  color: `var(--${appearance}-100)`,
  border: '1px solid transparent',
  fontSize: '14px',
  fontFamily: 'inherit',
  lineHeight: 'var(--line-height-20)',
  fontWeight: 'var(--font-weight-semi-bold)',
  backgroundColor: 'transparent',
  borderColor: `var(--${appearance}-100)`,
  transition: `color var(--transition-default),
               border-color var(--transition-default),
               background-color var(--transition-default)`,

  ...PRIMARY_BUTTON_SIZE_MAP[size],
  ...(!children && { padding: 0 }),

  '& svg': {
    fill: 'currentColor',
  },

  '&:hover:not(:focus):enabled': {
    color: 'var(--white)',
    borderColor: `var(--${appearance}-200)`,
    backgroundColor: `var(--${appearance}-200)`,
  },

  '&:active': {
    color: 'var(--white)',
    borderColor: `var(--${appearance}-300)`,
    backgroundColor: `var(--${appearance}-300)`,
  },

  '&:focus:not(:active):enabled': {
    color: 'var(--white)',
    borderColor: `var(--${appearance}-300)`,
    backgroundColor: `var(--${appearance}-100)`,
    boxShadow: `0 0 0 3px rgb(var(--${appearance}-100), 0.3)`,
  },

  '&:disabled': {
    color: 'var(--white)',
    borderColor: 'var(--gray-100)',
    backgroundColor: 'var(--gray-100)',

    '& svg': {
      color: 'var(--white)',
    },
  },
}));
