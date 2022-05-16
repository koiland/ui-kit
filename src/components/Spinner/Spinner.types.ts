export type TSpinnerAppearance = 'blue';
export type TSpinnerSize = 'xs' | 'sm' | 'md' | 'lg';

export type TSpinnerProps = {
  className?: string;
  /** Define size of Spinner: */
  size?: TSpinnerSize;
  /** Define color of Spinner: */
  appearance?: TSpinnerAppearance;
};

export type TSpinnerSizesScheme = {
  [key in TSpinnerSize]: {
    radius: string;
    strokeWidth: string;
    strokeDasharray: string;
  };
};
