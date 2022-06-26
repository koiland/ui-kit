import React from 'react';

/* @Types */
import { TPrimaryButtonProps } from './OutlineButton.types';

/* @Styled Components */
import { RenderLeadingStyled, RenderTrailingStyled, OutlineButtonStyled } from './OutlineButton.styled';

export const OutlineButton = ({
  size = 'sm',
  appearance = 'blue',
  loading = false,
  disabled = false,
  children,
  renderLeading,
  renderTrailing,
  ...props
}: TPrimaryButtonProps): JSX.Element => (
  <OutlineButtonStyled
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
  </OutlineButtonStyled>
);
