import React, { ReactElement } from 'react';
import Cta from './Button.styles';

export enum ButtonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

interface IButtonProps {
  buttonType: ButtonTypes;
  buttonText?: string;
  icon?: ReactElement;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

function Button({ buttonType, buttonText, onClick, disabled, fullWidth, icon }: IButtonProps) {
  return (
    <Cta
      type={buttonType}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {icon}
      {buttonText}
    </Cta>
  );
}

export default Button;
