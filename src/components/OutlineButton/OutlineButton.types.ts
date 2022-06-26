import { TBaseButtonProps } from '../BaseButton';

export type TOutlineButtonSize = 'sm';
export type TOutlineButtonAppearance = 'blue' | 'green' | 'red';

export type TSizeMap = {
  [key in TOutlineButtonSize]: {
    minWidth: string;
    minHeight: string;
    padding: string;
    borderRadius: string;
  };
};

export type TOutlineButtonProps = TBaseButtonProps & {
  /** Invoke loading state */
  loading?: boolean;
  /**
   * **sm:** — w&h: **32px**;
   */
  size?: TOutlineButtonSize;
  /**
   * **blue:** — **#0B71D9;**
   *
   * **green:** — **#2DA44E;**
   *
   * **red:** — **#DB4C3F;**
   *
   */
  appearance?: TOutlineButtonAppearance;
};
