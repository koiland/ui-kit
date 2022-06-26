import React from 'react';

/* @Types */
import { TGhostButtonProps } from './GhostButton.types';

/* @Styled Components */
import { RenderLeadingStyled, RenderTrailingStyled, GhostButtonStyled } from './GhostButton.styled';

export const GhostButton = ({
  size = 'sm',
  appearance = 'blue',
  loading = false,
  disabled = false,
  children,
  renderLeading,
  renderTrailing,
  ...props
}: TGhostButtonProps): JSX.Element => (
  <GhostButtonStyled
    size={size}
    appearance={appearance}
    disabled={loading || disabled}
    renderLeading={
      renderLeading ? <RenderLeadingStyled hasMargin={!!children}>{renderLeading}</RenderLeadingStyled> : null
    }
    renderTrailing={renderTrailing ? <RenderTrailingStyled>{renderTrailing}</RenderTrailingStyled> : null}
    {...props}
  >
    {children}
  </GhostButtonStyled>
);
