import { TBaseButtonProps } from '../BaseButton';

export type TTertiaryButtonSize = 'sm';
export type TTertiaryButtonAppearance = 'blue' | 'green' | 'red';

export type TSizeMap = {
  [key in TTertiaryButtonSize]: {
    minWidth: string;
    minHeight: string;
    padding: string;
    borderRadius: string;
  };
};

export type TTertiaryButtonProps = TBaseButtonProps & {
  /** Invoke loading state */
  loading?: boolean;
  /**
   * **sm:** — w&h: **32px**;
   */
  size?: TTertiaryButtonSize;
  /**
   * **blue:** — **#0B71D9;**
   *
   * **green:** — **#2DA44E;**
   *
   * **red:** — **#DB4C3F;**
   *
   */
  appearance?: TTertiaryButtonAppearance;
};
