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
  margin?: string;
}

function Button({ buttonType, buttonText, onClick, disabled, fullWidth, icon, margin }: Readonly<IButtonProps>) {
  return (
    <Cta
      type={buttonType}
      disabled={disabled}
      fullWidth={fullWidth}
      margin={margin}
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
