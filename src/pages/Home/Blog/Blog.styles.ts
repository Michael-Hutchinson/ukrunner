import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled as MUIStyled } from '@mui/material/styles';
import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 4.438rem;
  padding-bottom: 4.563rem;
  text-align: center;
  background: var(--grey);
`;

export const Image = MUIStyled(CardMedia)({
  height: '65%',
  minHeight: '75px',
  maxHeight: '10em',
}) as typeof CardMedia;

export const Item = MUIStyled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
