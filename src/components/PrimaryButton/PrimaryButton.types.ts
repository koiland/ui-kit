import { TBaseButtonProps } from '../BaseButton';

export type TPrimaryButtonAppearance = 'blue';
export type TPrimaryButtonSize = 'sm' | 'md' | 'lg';

export type TSizeMap = {
  sm: {
    minWidth: string;
    minHeight: string;
    padding: string;
    borderRadius: string;
  };
  md: {
    minWidth: string;
    minHeight: string;
    padding: string;
    borderRadius: string;
  };
  lg: {
    minWidth: string;
    minHeight: string;
    padding: string;
    borderRadius: string;
  };
};

export type TPrimaryButtonProps = TBaseButtonProps & {
  /** Invoke loading state */
  loading?: boolean;
  /**
   * **md** — default size.
   *
   * **lg** — description.
   */
  size?: TPrimaryButtonSize;
  /** Define which color Button should be */
  appearance?: TPrimaryButtonAppearance;
};
