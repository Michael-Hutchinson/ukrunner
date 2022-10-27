import { styled as muistyled } from '@mui/material/styles';
import styled from 'styled-components';
import Box from '@mui/material/Box';

export const FormContainer = muistyled(Box)`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
`;

export const FormHeader = muistyled(Box)`
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 15px;
  display: flex;
  svg {
    padding-right: 10px;
  }
`;

export const FormBody = muistyled(Box)`
  padding: 0 15px;
`;

export const FormFooter = muistyled(Box)`
  padding: 10px 0;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
`;

export const ButtonSection = styled.section`
  display: flex;
  justify-content: space-between;
`;
