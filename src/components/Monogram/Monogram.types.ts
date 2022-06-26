export type TMonogramSize = 'sm' | 'md' | 'lg';
export type TMonogramAppearance = 'blue' | 'green' | 'red';

export interface IAvatarProps {
  src: {
    '1x': string;
    '2x'?: string;
  };
  alt?: string;
  width?: string;
  height?: string;
  title?: string;
}

export interface IMonogramProps {
  avatar?: IAvatarProps;
  /**
   * **sm:** — w&h: **32px**;
   * **md:** — w&h: **40px**;
   * **lg:** — w&h: **44px**;
   */
  size?: TMonogramSize;
  /**
   * **blue:** — **#0B71D9;**
   *
   * **green:** — **#2DA44E;**
   *
   * **red:** — **#DB4C3F;**
   *
   */
  appearance?: TMonogramAppearance;
  hasRandomizedBackground?: boolean;
  initials: string;
}
