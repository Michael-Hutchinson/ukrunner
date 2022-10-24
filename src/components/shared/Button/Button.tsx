import React from 'react';
import Cta from './Button.styles';

interface IButtonProps {
  buttonType: 'button' | 'submit' | 'reset';
  buttonText: string;
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ buttonType, buttonText, onClick, disabled }: IButtonProps) {
  return (
    <Cta
      type={buttonType}
      disabled={disabled}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {buttonText}
    </Cta>
  );
}

export default Button;
