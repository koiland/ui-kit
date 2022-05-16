import styled, { keyframes, css } from 'styled-components';

/* @Types */
import { TSpinnerProps, TSpinnerSizesScheme } from './Spinner.types';

const rotateAnimation = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

export const SPINNER_SIZES_MAP: TSpinnerSizesScheme = {
  xs: {
    radius: '14px',
    strokeWidth: '2px',
    strokeDasharray: '25px',
  },
  sm: {
    radius: '18px',
    strokeWidth: '2px',
    strokeDasharray: '35px',
  },
  md: {
    radius: '24px',
    strokeWidth: '2px',
    strokeDasharray: '45px',
  },
  lg: {
    radius: '32px',
    strokeWidth: '2px',
    strokeDasharray: '65px',
  },
};

export const SpinnerStyled = styled.span<TSpinnerProps>({
  fontSize: '0',
  display: 'flex',
});

export const SVGStyled = styled.svg<TSpinnerProps>(
  ({ size, appearance }) => css`
    color: var(--${appearance}-100);
    width: ${SPINNER_SIZES_MAP[size]?.radius};
    height: ${SPINNER_SIZES_MAP[size]?.radius};
    animation: ${rotateAnimation} 0.6s linear infinite;
  `
);

export const CircleStyled = styled.circle<TSpinnerProps>(({ size }) => ({
  fill: 'none',
  strokeDashoffset: '0',
  strokeLinecap: 'round',
  r: `calc(${SPINNER_SIZES_MAP[size]?.radius} / 2.4)`,
  cx: `calc(${SPINNER_SIZES_MAP[size]?.radius} / 2)`,
  cy: `calc(${SPINNER_SIZES_MAP[size]?.radius} / 2)`,
  strokeWidth: SPINNER_SIZES_MAP[size]?.strokeWidth,
  strokeDasharray: SPINNER_SIZES_MAP[size]?.strokeDasharray,
  stroke: 'currentColor',
}));
