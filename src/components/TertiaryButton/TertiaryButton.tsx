import React from 'react';

/* @Types */
import { TTertiaryButtonProps } from './TertiaryButton.types';

/* @Styled Components */
import { RenderLeadingStyled, RenderTrailingStyled, TertiaryButtonStyled } from './TertiaryButton.styled';

export const TertiaryButton = ({
  size = 'sm',
  appearance = 'blue',
  loading = false,
  disabled = false,
  children,
  renderLeading,
  renderTrailing,
  ...props
}: TTertiaryButtonProps): JSX.Element => (
  <TertiaryButtonStyled
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
  </TertiaryButtonStyled>
);
