import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export const ButtonSection = styled(CardActions)`
  justify-content: space-evenly;
`;

export const Section = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const BlogContent = styled(CardContent)`
  flex-grow: 1;
`;

export const Wrapper = styled(Grid)`
  padding-top: 0.938rem;
  padding-bottom: 0.938rem;
`;
