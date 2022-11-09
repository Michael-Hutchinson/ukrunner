import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { styled as MUIStyled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export const ImageCard = MUIStyled(CardMedia)({
  height: '350px',
}) as typeof CardMedia;

export const BlogFooter = MUIStyled(Box)`
  padding: 10px;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
`;

export const BlogCard = MUIStyled(Card)`
  border: 1px solid #e7e7e7;
  margin-bottom: 20px;
  box-shadow: none;
  display: flex;
  flex-direction: column;
`;

export const FooterText = MUIStyled(Typography)({
  fontSize: '14px',
}) as typeof Typography;

export const FormContainer = MUIStyled(Box)`
  margin-bottom: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
`;

export const FormHeader = MUIStyled(Box)`
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 15px;
  display: flex;
  svg {
    padding-right: 10px;
  }
`;

export const FormBody = MUIStyled(Box)`
  padding: 15px;
`;

export const FormFooter = MUIStyled(Box)`
  padding: 10px 0;
  border-top: 1px solid #ddd;
  background-color: #f5f5f5;
`;
