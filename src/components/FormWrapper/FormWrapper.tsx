import React, { FormEvent, ReactElement } from 'react';
import Alert from '@mui/material/Alert';
import PersonIcon from '@mui/icons-material/Person';
import ModeIcon from '@mui/icons-material/Mode';
import Button, { ButtonTypes } from '../shared/Button/Button';
import { FormBody, FormContainer, FormFooter, FormHeader } from './FormWrapper.styles';

export const Icons = {
  User: <PersonIcon fontSize="small" />,
};

interface IFormWrapper {
  headerText: string;
  children: ReactElement;
  onSubmit: (e: FormEvent<HTMLDivElement>) => void;
  buttonType: ButtonTypes;
  buttonText: string;
  error?: string;
  icon?: ReactElement;
  disabled?: boolean;
  fullWidth?: boolean;
}

function FormWrapper({
  children,
  headerText,
  onSubmit,
  buttonType,
  buttonText,
  error,
  icon,
  disabled,
  fullWidth,
}: IFormWrapper) {
  return (
    <FormContainer>
      <FormHeader component="section">
        <>
          {icon || <ModeIcon fontSize="small" />}
          <h4>{headerText}</h4>
        </>
      </FormHeader>
      <FormBody component="form" onSubmit={onSubmit}>
        {children}
        <Button buttonType={buttonType} buttonText={buttonText} disabled={disabled} fullWidth={fullWidth} />
        {error && (
          <Alert sx={{ mb: 2 }} severity="error">
            {error}
          </Alert>
        )}
      </FormBody>
      <FormFooter />
    </FormContainer>
  );
}

export default FormWrapper;
