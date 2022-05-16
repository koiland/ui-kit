import React from 'react';

/* @Types */
import { TPrimaryButtonProps } from './PrimaryButton.types';

/* @Styled Components */
import { RenderLeadingStyled, RenderTrailingStyled, PrimaryButtonStyled } from './PrimaryButton.styled';

export const DEFAULT_PRIMARY_BUTTON_SIZE = 'md';
export const DEFAULT_PRIMARY_BUTTON_APPEARANCE = 'blue';

export const PrimaryButton = ({
  size = DEFAULT_PRIMARY_BUTTON_SIZE,
  appearance = DEFAULT_PRIMARY_BUTTON_APPEARANCE,
  loading = false,
  disabled = false,
  children,
  renderLeading,
  renderTrailing,
  ...props
}: TPrimaryButtonProps): JSX.Element => (
  <PrimaryButtonStyled
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
  </PrimaryButtonStyled>
);
