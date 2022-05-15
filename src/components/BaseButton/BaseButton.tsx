import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

export type TBaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  /** Default HTML attr */
  disabled?: boolean;
  /** ReactNode which will be rendered as content */
  children?: ReactNode;
  /** You can pass Icon component here. It will render it before children */
  renderLeading?: ReactNode;
  /** You can pass Icon component here. It will render it after children */
  renderTrailing?: ReactNode;
};

export const BaseButtonStyled = styled.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid transparent',
  margin: 0,
  padding: 0,
  borderRadius: 0,
  cursor: 'pointer',
  appearance: 'none',
  userSelect: 'none',
  position: 'relative',
  boxSizing: 'border-box',
  backfaceVisibility: 'hidden',
  backgroundColor: 'transparent',

  '&:focus': { outline: 'none' },

  '&:hover:enabled': { cursor: 'pointer' },

  '&:disabled': { cursor: 'not-allowed' },
});

export const BaseButton = ({
  disabled = false,
  type = 'button',
  className = '',
  renderLeading,
  renderTrailing,
  children,
  onClick,
  ...props
}: TBaseButtonProps): JSX.Element => (
  <BaseButtonStyled
    type={type}
    disabled={disabled}
    className={className}
    {...(disabled && { 'aria-disabled': true })}
    {...(!disabled ? { onClick } : (e): void => e.preventDefault())}
    {...props}
  >
    {renderLeading}
    {children}
    {renderTrailing}
  </BaseButtonStyled>
);
