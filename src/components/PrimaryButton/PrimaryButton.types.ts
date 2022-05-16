import { TBaseButtonProps } from '../BaseButton';

export type TPrimaryButtonAppearance = 'blue';
export type TPrimaryButtonSize = 'sm' | 'md' | 'lg';

export type TSizeMap = {
  [key in TPrimaryButtonSize]: {
    minWidth: string;
    minHeight: string;
    padding: string;
    borderRadius: string;
    font: string;
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
