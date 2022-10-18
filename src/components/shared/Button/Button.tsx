import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cta from './Button.styles';

interface IButtonProps {
  buttonType: 'button' | 'submit' | 'reset';
  buttonText: string;
  link: string;
}

function Button({ buttonType, buttonText, link }: IButtonProps) {
  const navigate = useNavigate();
  return (
    <Cta type={buttonType} onClick={() => navigate(link)}>
      {buttonText}
    </Cta>
  );
}

export default Button;
