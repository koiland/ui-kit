import { TBaseButtonProps } from '../BaseButton';

export type TPrimaryButtonSize = 'sm';
export type TPrimaryButtonAppearance = 'blue' | 'green' | 'red';

export type TSizeMap = {
  [key in TPrimaryButtonSize]: {
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
   * **sm:** — w&h: **32px**;
   */
  size?: TPrimaryButtonSize;
  /**
   * **blue:** — **#0B71D9;**
   *
   * **green:** — **#2DA44E;**
   *
   * **red:** — **#DB4C3F;**
   *
   */
  appearance?: TPrimaryButtonAppearance;
};
