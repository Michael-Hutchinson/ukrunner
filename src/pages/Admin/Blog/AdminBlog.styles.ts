import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

export const ButtonSection = MUIStyled(CardActions)`
  justify-content: space-evenly;
`;

export const Section = MUIStyled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BlogContent = MUIStyled(CardContent)`
  flex-grow: 1;
`;

export const Wrapper = MUIStyled(Grid)`
  padding-top: 0.938rem;
  padding-bottom: 0.938rem;
`;

export const Image = MUIStyled(CardMedia)({
  height: '65%',
  minHeight: '75px',
  maxHeight: '10em',
}) as typeof CardMedia;

export const ChipParent = styled.div`
  position: absolute;
`;

export const ChipStyle = MUIStyled(Chip)`
  background-color: #000000;
  margin: 5px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  color: #ffffff;
`;
