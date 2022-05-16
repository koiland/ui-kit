import React from 'react';

/* @Types */
import { TSpinnerProps } from './Spinner.types';

/* @Styled Components */
import { SpinnerStyled, SVGStyled, CircleStyled } from './Spinner.styled';

const DEFAULT_SPINNER_SIZE = 'md';
const DEFAULT_SPINNER_APPEARANCE = 'blue';

export const Spinner = ({
  size = DEFAULT_SPINNER_SIZE,
  appearance = DEFAULT_SPINNER_APPEARANCE,
  ...props
}: TSpinnerProps): JSX.Element => (
  <SpinnerStyled {...props}>
    <SVGStyled size={size} appearance={appearance}>
      <CircleStyled size={size} />
    </SVGStyled>
  </SpinnerStyled>
);

Spinner.displayName = 'Spinner';
