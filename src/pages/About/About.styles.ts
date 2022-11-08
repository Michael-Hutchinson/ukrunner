import Grid from '@mui/material/Grid';
import { styled as MUIStyled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 5px;
`;

export const Section = styled.section`
  padding-bottom: 4.563rem;
`;

export const StatsSection = styled.section`
  background: var(--grey);
  border-top: 1px solid var(--lightGrey);
`;

export const ButtonTab = MUIStyled(Tab)`
  &.Mui-selected {
    color: var(--yellow);
    span {
      border-bottom: 2px solid var(--yellow);
    }
  }
`;

export const ParentTab = MUIStyled(Tabs)`
  span {
    background-color: 2px solid var(--yellow);
  }
`;

export const GridText = MUIStyled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const GridBox = MUIStyled(Grid)`
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  padding: 20px;
`;

export const GridHeader = MUIStyled(Typography)`
  font-size: 3rem;
  line-height: 1;
`;

export const GridSubHeader = MUIStyled(Typography)`
  color: var(--yellow);
  text-transform: uppercase;
`;
