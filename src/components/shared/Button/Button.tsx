import React from 'react';
import Cta from './Button.styles';

interface IButtonProps {
  buttonType: 'button' | 'submit' | 'reset';
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
