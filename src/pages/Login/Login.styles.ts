import { styled } from '@mui/material/styles';
import { User } from '@styled-icons/boxicons-regular';
import Box from '@mui/material/Box';

export const FormContainer = styled(Box)`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
`;

export const FormHeader = styled(Box)`
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 15px;
  display: flex;
`;

export const FormBody = styled(Box)`
  padding: 0 15px;
`;

export const FormFooter = styled(Box)`
  padding: 10px 0;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
`;

export const UserIcon = styled(User)`
  padding-right: 10px;
`;
