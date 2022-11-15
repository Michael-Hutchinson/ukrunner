import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { styled as MUIStyled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  border-radius: 50%;
  border: 1px solid #ddd;
  padding: 5px;
`;

export const BlogCard = MUIStyled(Card)`
  border: 1px solid #e7e7e7;
  margin-bottom: 20px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
`;

export const ChipParent = styled.div`
  position: absolute;
`;

export const ChipStyle = MUIStyled(Chip)`
  background-color: #000000;
  margin: 5px;
  text-transform: uppercase;
  font-size: 10px;
  font-weight: bold;
  color: #FFFFFF;
`;

export const ImageCard = MUIStyled(CardMedia)({
  height: '350px',
}) as typeof CardMedia;

export const BlogFooter = MUIStyled(Box)`
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
`;

export const FooterText = MUIStyled(Typography)({
  fontSize: '14px',
}) as typeof Typography;
