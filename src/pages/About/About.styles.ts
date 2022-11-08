import Grid from '@mui/material/Grid';
import { styled as MUIStyled } from '@mui/material/styles';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
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
  padding-left: 0;
  &.Mui-selected {
    color: var(--yellow);
    span {
      border-right: 2px solid var(--yellow);
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
