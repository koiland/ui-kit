import { TBaseButtonProps } from '../BaseButton';

export type TGhostButtonSize = 'sm';
export type TGhostButtonAppearance = 'blue' | 'green' | 'red';

export type TSizeMap = {
  [key in TGhostButtonSize]: {
    minWidth: string;
    minHeight: string;
    padding: string;
    borderRadius: string;
  };
};

export type TGhostButtonProps = TBaseButtonProps & {
  /** Invoke loading state */
  loading?: boolean;
  /**
   * **sm:** — w&h: **32px**;
   */
  size?: TGhostButtonSize;
  /**
   * **blue:** — **#0B71D9;**
   *
   * **green:** — **#2DA44E;**
   *
   * **red:** — **#DB4C3F;**
   *
   */
  appearance?: TGhostButtonAppearance;
};
