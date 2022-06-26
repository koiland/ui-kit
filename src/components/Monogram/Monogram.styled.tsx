import styled from 'styled-components';

/* @Types */
import { TMonogramAppearance, TMonogramSize } from './Monogram.types';

export const MonogramStyled = styled.div<{ size: TMonogramSize; appearance: TMonogramAppearance; initials: string }>(
  ({ size, appearance }) => ({
    color: appearance,
    width: size,
  })
);
