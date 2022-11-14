import Fab from '@mui/material/Fab';
import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

export const FileInput = styled.input`
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const BGImage = styled.div<{ background: string }>`
  background-image: url('${({ background }) => background}');
  padding-bottom: 40%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  position: relative;
}
`;

export const CloseButton = MUIStyled(Fab)`
  position: absolute;
  top: 5px;
  right: 5px;
`;
