import React, { FormEvent, ReactElement } from 'react';
import Alert from '@mui/material/Alert';
import ModeIcon from '@mui/icons-material/Mode';
import Button, { ButtonTypes } from '../shared/Button/Button';
import { ButtonSection, FormBody, FormContainer, FormFooter, FormHeader } from './FormWrapper.styles';

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
  cancelClick?: () => void;
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
  cancelClick,
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
        <ButtonSection>
          {cancelClick && (
            <Button onClick={cancelClick} buttonType={ButtonTypes.button} buttonText="Cancel" fullWidth={fullWidth} />
          )}
          <Button buttonType={buttonType} buttonText={buttonText} disabled={disabled} fullWidth={fullWidth} />
        </ButtonSection>
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
