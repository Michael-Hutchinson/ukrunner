import React from 'react';
import Cta from './Button.styles';

interface IButtonProps {
  buttonType: 'button' | 'submit' | 'reset';
  buttonText: string;
  onClick?: () => void;
}

function Button({ buttonType, buttonText, onClick }: IButtonProps) {
  return (
    <Cta
      type={buttonType}
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {buttonText}
    </Cta>
  );
}

export default Button;
