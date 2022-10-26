import React from 'react';
import Cta from './Button.styles';

export enum ButtonTypes {
  button = 'button',
  submit = 'submit',
  reset = 'reset',
}

interface IButtonProps {
  buttonType: ButtonTypes;
  buttonText: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

function Button({ buttonType, buttonText, onClick, disabled, fullWidth }: IButtonProps) {
  return (
    <Cta
      type={buttonType}
      disabled={disabled}
      fullWidth={fullWidth}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {buttonText}
    </Cta>
  );
}

export default Button;
